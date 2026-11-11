import { JSONObject, OrderData, OrderItemData, OrderStatus, OrderUpdate, USE_SECURE_VALIDATION } from "../data";
import InterfaceAPI from "../interfaceAPI";

class InterfacePrintify extends InterfaceAPI
{
    SHOP_ID = 19833289; // acquired with a GET request on their API, using my private token
    USER_AGENT = "Cloudflare Pages"; // some made-up consistent client/app name
    BASE_URL = "https://api.printify.com/v2"

    // valid one year; limited scopes to just orders, products webhooks and print providers; generated 31-12-2024
    PRIVATE_TOKEN = "@TODO: Insert from Github Secrets instead";
    
    getHTTPHeaders()
    {
        return {
            "Authorization": `Bearer ${ this.PRIVATE_TOKEN }`,
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "User-Agent": this.USER_AGENT,
        }
    }

    async getMasterStoreToken(json:JSONObject, masterStore:InterfaceAPI)
    {
        const resourceID = (json.resource ?? {}).id;
        const details = await this.getOrderDetails(resourceID, masterStore) ?? {};
        return (details.metadata ?? {}).shop_order_id;
    }

    async getOrderDetails(orderToken:string, masterStore:InterfaceAPI)
    {
        const orderDetailsURL = `${this.BASE_URL}/shops/${this.SHOP_ID}/orders/${orderToken}.json`
        const orderDetails = await this.executeHTTPRequest(orderDetailsURL, "GET");

        if(!orderDetails || !orderDetails.ok) 
        { 
            masterStore.resultLogger.error(`Printify->Get order details failed for ${ orderToken }`);
            return {}; 
        }

        return orderDetails.json();
    }

    async submitOrder(json:OrderData, itemsInOrder:OrderItemData[], masterStore:InterfaceAPI)
    {
        if(itemsInOrder.length <= 0) { return false; }

        // collect in an object with the right settings
        const addressData = json.recipient;
        const printifyData = 
        {
            external_id: json.externalToken,
            label: json.label,
            line_items: itemsInOrder,
            shipping_method: 4, // 1 = standard, 4 = economy
            is_printify_express: false,
            is_economy_shipping: true,
            send_shipping_notification: true,
            address_to: 
            {
                first_name: addressData.firstName,
                last_name: addressData.fullName,
                email: addressData.email,
                phone: addressData.phone,
                country: addressData.country,
                region: addressData.province,
                address1: addressData.address1,
                address2: addressData.address2,
                city: addressData.city,
                zip: addressData.postalCode
            }
        }

        // inform printify to create this order too
        // @NOTE: any further updating of Master Store's version of the order just follows the webhooks and Printify's events
        const printifyURL = `${this.BASE_URL}/shops/${ this.SHOP_ID }/orders.json`;
        const response = await this.executeHTTPRequest(printifyURL, "POST", printifyData);

        if(!response || !response.ok) 
        { 
            masterStore.resultLogger.error(`Master Store -> Printify Order Creation Error at ${printifyURL}`, printifyData, response); 
            return false;
        }

        masterStore.resultLogger.log(`Successfully informed Master Store -> Printify about order ${json.externalToken}`);
        return true;
    }

    getEventName(json:JSONObject)
    {
        return json.type;
    }

    async isValidEvent(eventContext, masterStore:InterfaceAPI)
    {
        const printifySignature = eventContext.request.headers.get("X-Pfy-Signature");
        if(!printifySignature) { return false; }

        if(USE_SECURE_VALIDATION) 
        {
            const secretToken = eventContext.env.SECRET_TOKEN_PRINTIFY;
            const expectedSignature = this.generateHexdigestSignature(secretToken, eventContext.request);
            
            if(expectedSignature != printifySignature) 
            { 
                masterStore.resultLogger.error("Printify Signature and Private Signature don't match", printifySignature, expectedSignature); 
                return false;
            }

            return true;
        }

        const requestingHost = new URL(eventContext.request.url).host;
        const validURL = requestingHost == "api.printify.com";
        if(!validURL) { masterStore.resultLogger.error(`Printify request doesn't come from valid url: ${requestingHost}`); return false; }
        return true;
    }
}

// @NOTE: this is just to make sure we know it arrived, even if nothing else happened to the order yet
const onPrintifyOrderCreated = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const newData:OrderUpdate = { status: OrderStatus.PROCESSED, metadata: { submitted_to_merchant: true } };
    return this.updateOrderOnMaster(json, masterStore, newData);
}

const onPrintifyOrderUpdated = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    if(json.resource.data.status != "canceled") { return false; }
    const newData:OrderUpdate = { status: OrderStatus.CANCELLED }
    return this.updateOrderOnMaster(json, masterStore, newData);
}

const onPrintifyShipmentCreated = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const newData:OrderUpdate = {
        status: OrderStatus.SHIPPED,
        trackingNumber: json.resource.data.carrier.tracking_number,
        trackingUrl: json.resource.data.carrier.tracking_url,
    };
    return this.updateOrderOnMaster(json, masterStore, newData);
}

const onPrintifyShipmentDelivered = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const newData:OrderUpdate = {
        status: OrderStatus.DELIVERED,
        trackingNumber: json.resource.data.carrier.tracking_number,
        trackingUrl: json.resource.data.carrier.tracking_url,
    };
    return this.updateOrderOnMaster(json, masterStore, newData);
}

export { InterfacePrintify }
export default () =>
{
    const platform = new InterfacePrintify();
    platform.addEventHook("order:created", onPrintifyOrderCreated);
    platform.addEventHook("order:updated", onPrintifyOrderUpdated);
    platform.addEventHook("order:shipment:created", onPrintifyShipmentCreated);
    platform.addEventHook("order:shipment:delivered", onPrintifyShipmentDelivered);
    return platform;
}