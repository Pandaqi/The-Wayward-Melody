import { ItemData, JSONObject, OrderData, OrderItemData, OrderUpdate } from "./data";
import ResultLogger from "./resultLogger";

interface HTTPRequestParams
{
    method?: string,
    headers?: Record<string,any>,
    body?: string
}

export default class InterfaceAPI
{
    BASE_URL = "";
    MAX_QUANTITY = 50;
    
    eventHooks = {};
    resultLogger = new ResultLogger()

    defaultMerchandisePlatform = ""

    addEventHook(key:string, func:Function)
    {
        this.eventHooks[key] = func;
    }

    getHTTPHeaders() { return {}; }
    getEventName(json:JSONObject) { return json.eventName ?? "unknown:event:name"; }
    executeHTTPRequest(url:string, method:string = "GET", data:JSONObject = null)
    {
        const params:HTTPRequestParams = {
            method: method,
            headers: this.getHTTPHeaders(),
        }
        if(data) { params.body = JSON.stringify(data); }
        return fetch(url, params);
    }

    async isValidEvent(eventContext, masterStore:InterfaceAPI = null) { return true; }
    async handleValidatedRequest(eventContext, masterStore:InterfaceAPI)
    {
        const json = await eventContext.request.json();
        const eventName = this.getEventName(json);
        const eventHook = this.eventHooks[eventName];
        if(!eventHook) { return false; }
        return await eventHook.call(this, json, masterStore);
    }

    getResponse()
    {
        return new Response(this.resultLogger.toJSONResponse(), 
        {
            headers: 
            {
                'Content-Type': 'application/json'
            }
        });
    }

    async generateHexdigestSignature(secretToken:string, messageToSign:string) : Promise<string>
    {
        const enc = new TextEncoder();
        const algorithm = { name: "HMAC", hash: "SHA-512" };

        const keyHmac = await crypto.subtle.importKey(
            "raw",
            enc.encode(secretToken),
            algorithm,
            false,
            ["sign", "verify"]
        );

        const signature = await crypto.subtle.sign(
            algorithm.name,
            keyHmac,
            enc.encode(messageToSign)
        );

        // convert buffer digested hex string
        const sigHex = Array.from(new Uint8Array(signature), (b) => b.toString(16).padStart(2, "0")).join("");
        return sigHex;
    }

    async submitOrder(json:OrderData, itemsInorder:OrderItemData[], masterStore:InterfaceAPI) : Promise<boolean> { return false; } // submit an order from masterStore to a merch platform
    async getMasterStoreToken(json:JSONObject, masterStore:InterfaceAPI) : Promise<string> { return ""; } // get the unique ID/token that links the order across platforms
    async getOrderDetails(orderToken:string, masterStore:InterfaceAPI) : Promise<JSONObject> { return {}; } // get full details from an order
    async updateOrder(orderToken:string, newData:JSONObject) : Promise<boolean> { return false; } // update existing order according to given data
    async updateOrderOnMaster(json:JSONObject, masterStore:InterfaceAPI, newData:OrderUpdate)
    {
        return masterStore.updateOrder(await this.getMasterStoreToken(json, masterStore), newData);
    }

    // @TODO: should this also be abstracted, or is that pointless as I am the one delivering the items in a specific agreed-upon format from the HUGO website already?

    // returns an OBJECT; key = platform name, value = list of items to buy
    filterMerchandiseInOrder(orderItems:OrderItemData[]) : Record<string,ItemData[]>
    {
        // go through all items and register anything that's merchandise + their details and to which platform they belong
        const merchandiseItems:Record<string,ItemData[]> = {};
        for(const item of orderItems)
        {
            const isMerchandise = item.categories.includes("merchandise");
            if(!isMerchandise) { continue; }

            const quantity = item.quantity ?? 1;
            const productSKU = item.customFields.find((elem:JSONObject) => elem.name == "sku");
            const productPlatform = item.customFields.find((elem:JSONObject) => elem.name == "platform") ?? this.defaultMerchandisePlatform;

            const invalidQuantity = quantity <= 0 || quantity > this.MAX_QUANTITY;
            const invalidSKU = !productSKU; 
            const invalidOrder = invalidQuantity || invalidSKU;
            if(invalidOrder)
            { 
                this.resultLogger.error(`Product marked as Merchandise, but has Invalid Data: sku=${productSKU}, quantity=${quantity}`);
                continue; 
            }

            const itemData:ItemData = 
            {
                sku: productSKU,
                quantity: quantity
            };

            if(!(productPlatform in merchandiseItems)) { merchandiseItems[productPlatform] = []; }
            merchandiseItems[productPlatform].push(itemData);
        }

        // sanity and security checks
        const merchandiseItemsFlat:ItemData[] = [];
        for(const [key,data] of Object.entries(merchandiseItems))
        {
            merchandiseItemsFlat.push(...data);
        }

        const allSKUs = merchandiseItemsFlat.map((elem:ItemData) => elem.sku);
        const noDuplicates = new Set(allSKUs).size != allSKUs.length; // duplicates are simply impossible, as quantity handles that
        const resultIsValid = merchandiseItemsFlat.length <= orderItems.length && noDuplicates;
        if(!resultIsValid)
        {
            this.resultLogger.error(`Something went wrong when filtering merchandise from order`, orderItems, merchandiseItems);
            return {};
        }

        return merchandiseItems;
    }
}