import { ItemData, JSONObject, OrderUpdate, SHIPPING_ZONES } from "../data";
import InterfaceAPI from "../interfaceAPI";

class InterfaceSnipcart extends InterfaceAPI
{
    PRIVATE_TOKEN = "@TODO: Insert from Github Secrets instead";
    MINIMUM_COST_ORDER = 35;

    merchandisePlatforms:Record<string,InterfaceAPI> = {};
    defaultMerchandisePlatform = "";

    addMerchandisePlatform(key:string, mp:InterfaceAPI)
    {
        this.merchandisePlatforms[key] = mp;
    }

    setDefaultMerchandisePlatform(key:string)
    {
        this.defaultMerchandisePlatform = key;
    }

    getMerchandisePlatform(key:string)
    {
        return this.merchandisePlatforms[key] ?? this.merchandisePlatforms[this.defaultMerchandisePlatform];
    }

    getHTTPHeaders()
    {
        return {
            "Authorization": `Basic ${ btoa(this.PRIVATE_TOKEN + ":") }`,
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        }
    }

    async updateOrder(orderToken:string, newData:OrderUpdate)
    {
        if(!orderToken) 
        { 
            this.resultLogger.error("Tried to update Snipcart order, but no order token!");
            return false; 
        }

        // @TODO: once we have our in-between layer, we should CONVERT the newData we get here to what Snipcart expects (status is required + the allowed values for it)
        const snipcartURL = `https://app.snipcart.com/api/orders/${orderToken}`;
        const responseSnipcart = await this.executeHTTPRequest(snipcartURL, "PUT", newData);

        if(!responseSnipcart || !responseSnipcart.ok) 
        { 
            this.resultLogger.error(`Merchandise->Snipcart Update Error at ${ snipcartURL }`, responseSnipcart); 
            return false;
        }

        this.resultLogger.log(`Successfully updated Merchandise->Snipcart for order ${orderToken}`);
        return true;
    }

    async isValidEvent(eventContext, masterStore:InterfaceAPI = null)
    {
        // is it a Snipcart request?
        const snipcartToken = eventContext.request.headers.get("X-Snipcart-RequestToken");
        if(!snipcartToken) { return false; }

        // perform handshake to see if it's legit (secret tokens only valid for 1 hour)
        const snipcartURL = `https://app.snipcart.com/api/requestvalidation/${snipcartToken}`
        const response = await this.executeHTTPRequest(snipcartURL, "GET");

        if(!response || !response.ok) 
        { 
            this.resultLogger.error(`Snipcart Validation Invalid Response for ${snipcartURL}`, response); 
            return false; 
        }

        return true;
    }

    getEventName(json:JSONObject)
    {
        return json.eventName;
    }
    
    async onRequest(eventContext)
    {
        if(await this.isValidEvent(eventContext))
        {
            return this.handleValidatedRequest(eventContext, this);
        }

        for(const [name,api] of Object.entries(this.merchandisePlatforms))
        {
            if(await api.isValidEvent(eventContext, this))
            {
                return api.handleValidatedRequest(eventContext, this);
            }
        }

        return false;
    }
}

const onSnipcartShippingFetch = async function(json:JSONObject)
{
    const items = json.content.items;
    const hasMerchandise = Object.keys(this.filterMerchandiseInOrder(items)).length > 0;
    const orderCost = (json.content ?? {}).finalGrandTotal ?? this.MINIMUM_COST_ORDER;
    const diff = Math.max(this.MINIMUM_COST_ORDER - orderCost, 0);
    let shippingFee = diff;
    let shippingDesc = `Enforcing minimum order cost of ${this.MINIMUM_COST_ORDER}.`;

    if(!hasMerchandise)
    {
        shippingFee = 0;
        shippingDesc = "Free Shipping!"
    }

    if(hasMerchandise)
    {
        // collect how often each zone is allowed
        const shippingZones = {};
        for(const item of items)
        {
            const itemZones = item.customFields.find((elem) => elem.name == "zones") ?? [];
            itemZones.forEach((x) => { shippingZones[x] = (shippingZones[x] ?? 0) + 1 });
        }

        // only keep those that are present in ALL items
        const shippingZonesAllowed = Object.keys(shippingZones).filter((x) => shippingZones[x] >= items.length);

        // then check if shipping country matches that zone
        const countryCode = json.content.user.shippingAddress.country;
        let shippingZone = "";
        for(const [name,data] of Object.entries(SHIPPING_ZONES))
        {
            if(!shippingZonesAllowed.includes(name)) { continue; }
            if(data.countries.includes(countryCode)) { shippingZone = name; break; }
        }
        if(!shippingZone) { return false; }
        shippingDesc += ` Shipping to zone ${shippingZone}.`;
    }

    this.resultLogger.addRate({
        cost: shippingFee,
        description: shippingDesc,
        userDefinedId: "shipping_custom",
    });

    return true;
}

const onSnipcartOrderCompleted = async function(json:JSONObject)
{
    const merchandiseItems:Record<string,ItemData[]> = this.filterMerchandiseInOrder(json.content.items);

    // have merchandise? 
    const merchandiseItemsFlat:ItemData[] = [];
    for(const [key,data] of Object.entries(merchandiseItems))
    {
        merchandiseItemsFlat.push(...data);
    }

    const numStores = Object.keys(merchandiseItems).length;
    const numMerchandiseItems = merchandiseItemsFlat.length;
    const containsMerchandise = numMerchandiseItems > 0;
    this.resultLogger.log(`Found ${numMerchandiseItems} merchandise items from ${numStores} stores`, merchandiseItems);

    let failed = false;
    if(containsMerchandise)
    {    
        // manipulate date into our agreed-upon format in this system
        json.externalToken = json.token;
        json.label = json.invoiceNumber;
        json.recipient = json.shippingAddress ?? json.billingAddress;
        json.recipient.email = json.email;
        json.recipient.taxNumber = json.billingAddress.vatNumber ?? json.shippingAddress.vatNumber;

        for(const [platformKey,itemsInOrder] of Object.entries(merchandiseItems))
        {
            const platform = this.getMerchandisePlatform(platformKey);
            const result = await platform.submitOrder(json, itemsInOrder, this);
            if(result) { continue; }
            this.resultLogger.error(`Could not submit order ${json.externalToken} to platform ${platformKey}`, itemsInOrder);
            failed = true;
        }
    }

    if(failed) { return false; }
    this.resultLogger.log(`Successfully handled a Snipcart order:completed event.`);
    return true;
}

export { InterfaceSnipcart }
export default (platforms:Record<string,InterfaceAPI> = {}, shippingOnly = false) =>
{
    const store = new InterfaceSnipcart();    

    // shipping gets a hotlane because of how often it's requested, and it's all we need
    store.addEventHook("shippingrates.fetch", onSnipcartShippingFetch); 
    if(shippingOnly) { return store; }

    // otherwise, add platforms and other hooks
    for(const [name,obj] of Object.entries(platforms))
    {
        store.addMerchandisePlatform(name, obj);
        store.setDefaultMerchandisePlatform(name);
    }

    store.addEventHook("order.completed", onSnipcartOrderCompleted);
    return store;
}