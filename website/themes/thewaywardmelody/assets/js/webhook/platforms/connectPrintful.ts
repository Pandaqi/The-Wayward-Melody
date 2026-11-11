import { AUTO_CONFIRM, JSONObject, OrderData, OrderItemData, OrderStatus, OrderUpdate, USE_SECURE_VALIDATION } from "../data";
import InterfaceAPI from "../interfaceAPI";

interface OrderSyncData
{
    source: string,
    sync_variant_id: string,
    quantity: number
}

class InterfacePrintful extends InterfaceAPI
{
    STATUS_DICTIONARY = {
        draft: OrderStatus.IN_PROGRESS,
        pending: OrderStatus.ON_HOLD,
        failed: OrderStatus.CANCELLED,
        canceled: OrderStatus.CANCELLED,
        onhold: OrderStatus.ON_HOLD,
        inprocess: OrderStatus.PROCESSED,
        partial: OrderStatus.PROCESSED,
        fulfilled: OrderStatus.SHIPPED
    };
    BASE_URL = "https://api.printful.com/v2";
    PRIVATE_TOKEN = "@TODO: Insert from Github Secrets instead";

    getHTTPHeaders()
    {
        return {
            "Authorization": `Bearer ${ this.PRIVATE_TOKEN }`,
            'Content-Type': 'application/json',
        }
    }

    async getMasterStoreToken(json:JSONObject, masterStore:InterfaceAPI)
    {
        return ((json.data ?? {}).order ?? {}).external_id;
    }

    async getOrderDetails(orderToken:string, masterStore:InterfaceAPI)
    {
        const orderDetailsURL = `${this.BASE_URL}/orders/${orderToken}`
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

        const itemsConverted:OrderSyncData[] = [];
        for(const item of itemsInOrder)
        {
            // SYNC means we take an existing finished design; SOURCE would mean we build something on the fly
            itemsConverted.push({
                source: "sync",
                sync_variant_id: item.sku,
                quantity: item.quantity
            })
        }

        const orderURL = `${this.BASE_URL}/orders`;
        const addressData = json.recipient;
        const orderData = 
        {
            external_id: json.externalToken,
            shipping: "STANDARD",
            recipient: 
            {
                name: addressData.fullName,
                company: addressData.company,
                address1: addressData.address1,
                address2: addressData.address2,
                city: addressData.city,
                state_code: addressData.province,
                country_code: addressData.country,
                zip: addressData.postalCode,
                phone: addressData.phone,
                email: addressData.email,
                tax_number: addressData.taxNumber,                
            },
            order_items: itemsConverted,
            // @TODO: only enable once certain about this
            /*retail_costs: 
            {
                currency: json.currency.toUpperCase(),
                discount: 0,
                shipping: json.shippingFees,
                tax: json.taxesTotal,
            }*/
        };
        const response = await this.executeHTTPRequest(orderURL, "POST", orderData);

        if(!response || !response.ok) 
        { 
            masterStore.resultLogger.error(`Master Store -> Printful Order Creation Error at ${orderURL}`, orderData, response); 
            return false;
        }

        masterStore.resultLogger.log(`Successfully informed Master Store -> Printful about order ${json.externalToken}`);
        if(!AUTO_CONFIRM) { return true; }

        const orderID = (response.json() as JSONObject).data.id;
        const orderConfirmURL = `${this.BASE_URL}/orders/${orderID}/confirmation`;
        const responseConfirm = await this.executeHTTPRequest(orderConfirmURL, "POST");
        
        if(!responseConfirm || !responseConfirm.ok)
        {
            masterStore.resultLogger.error(`Master Store -> Printful Order Confirmation Error at ${orderConfirmURL}`, responseConfirm);
            return false;
        }

        masterStore.resultLogger.log(`Successfully confirmed Printful order with ID ${orderID} at ${orderConfirmURL}`);
        return true;
    }

    getEventName(json:JSONObject)
    {
        return json.type;
    }

    async isValidEvent(eventContext, masterStore:InterfaceAPI)
    {
        const printfulSignature = eventContext.request.headers.get("x-pf-webhook-signature");
        if(!printfulSignature) { return false; }

        // @TODO: not sure if `eventContext.request` is actually the right body to hash or if we need something smaller?
        if(USE_SECURE_VALIDATION) 
        {
            const secretToken = eventContext.env.SECRET_TOKEN_PRINTFUL;
            const expectedSignature = this.generateHexdigestSignature(secretToken, eventContext.request);
    
            if(expectedSignature != printfulSignature) 
            { 
                masterStore.resultLogger.error("Printful Signature and Private Signature don't match", printfulSignature, expectedSignature); 
                return false;
            }
            return true;
        } 

        const requestingHost = new URL(eventContext.request.url).host;
        const validURL = requestingHost == "api.printful.com";
        if(!validURL) { masterStore.resultLogger.error(`Printful request doesn't come from valid url: ${requestingHost}`); return false; }
        return true;
    }
}

const onPrintfulOrderCreated = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const newData:OrderUpdate = { status: OrderStatus.IN_PROGRESS, metadata: { submitted_to_merchant: true } };
    this.updateOrderOnMaster(json, masterStore, newData);
}

const onPrintfulOrderUpdated = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const rawStatus = json.data.order.status;
    const convertedStatus = this.STATUS_DICTIONARY[rawStatus];
    const newData:OrderUpdate = { status: convertedStatus }
    this.updateOrderOnMaster(json, masterStore, newData);
}

const onPrintfulShipmentSent = async function(json:JSONObject, masterStore:InterfaceAPI)
{
    const newData:OrderUpdate = { status: OrderStatus.SHIPPED, trackingNumber: json.data.shipment.trackingNumber }
    this.updateOrderOnMaster(json, masterStore, newData);
}

export { InterfacePrintful }
export default () =>
{
    const platform = new InterfacePrintful();
    platform.addEventHook("order_created", onPrintfulOrderCreated);
    platform.addEventHook("order_updated", onPrintfulOrderUpdated);
    platform.addEventHook("shipment_sent", onPrintfulShipmentSent);
    return platform;
}