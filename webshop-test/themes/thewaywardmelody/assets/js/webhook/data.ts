const USE_SECURE_VALIDATION = false;
const AUTO_CONFIRM = false;

type JSONObject = Record<string,any>;

interface ItemData
{
    sku?: string,
    quantity?: number
}

enum ShippingZone
{
    EU = "EU",
    NA = "NA"
}

interface ShippingZoneData
{
    name: string,
    countries: string[]
}

interface ShippingRate
{
    cost: number,
    description: string,
    userDefinedId: string
}

const SHIPPING_ZONES:Record<ShippingZone, ShippingZoneData> =
{
    [ShippingZone.EU]:
    {
        name: "Europe",
        countries: ["BE", "BG", "BA", "JE", "BY", "RU", "RS", "RO", "GR", "GG", "GB", "GI", "HR", "HU", "PT", "SJ", "PL", "EE", "IT", "ES", "ME", "MD", "MC", "MK", "MT", "IM", "FR", "FI", "FO", "NL", "NO", "XK", "CH", "CZ", "CY", "SK", "SI", "SM", "SE", "DK", "DI", "LI", "LV", "LT", "LU", "VA", "AD", "IS", "AL", "AT", "AX", "IE", "UA"],
    },

    [ShippingZone.NA]: 
    {
        name: "North America",
        countries: ["US", "CA"],
    }
}

enum OrderStatus
{
    ON_HOLD = "OnHold",
    PROCESSED = "Processed",
    IN_PROGRESS = "InProgress",
    CANCELLED = "Cancelled",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered"
}

interface OrderUpdate
{
    status?: OrderStatus,
    trackingNumber?: string,
    trackingUrl?: string,
    metadata?: JSONObject
};

interface RecipientData
{
    firstName: string,
    fullName: string,
    address1: string,
    address2: string,
    province: string,
    country: string,
    city: string,
    postalCode: string,
    email: string,
    phone?: string,
    company?: string,
    taxNumber?: string,
}

interface OrderData
{
    externalToken: string,
    label: string,
    items: OrderItemData[],
    recipient: RecipientData,
}

interface OrderItemData
{
    // @TODO: fill up with all the other fields => is this needed? We don't really use anything else in this system
    sku?: string,
    categories?: string[],
    quantity?: number,
    customFields?: Record<string,any>
}

// @TODO: Use separate Javascript files for different WEBHOOKS? (Printify allows this per event-type, Snipcart doesn't) => though this means SHARING private tokens across files, can vanilla JS do that already with import/export?
// @SOURCE: 'https://httpbin.org/post' => for TESTING post requests??
// @TODO: NOT REALLY SURE WHAT TO DO WITH THIS
/*const PRINTIFY_TO_SNIPCART_STATUS = {
    "pending": "Pending",
    "on-hold": "Pending",
    "payment-not-received": "Pending",
    "had-issues": "Pending",
    "sending-to-production": "Processed",
    "in-production": "Processed",
    "canceled": "Cancelled",
    "fulfilled": "",
    "partially-fulfilled": "Processed"
}*/

export 
{
    USE_SECURE_VALIDATION,
    AUTO_CONFIRM,
    SHIPPING_ZONES,
    ShippingRate,
    ShippingZone,
    JSONObject,
    ItemData,
    OrderUpdate,
    OrderStatus,
    OrderData,
    OrderItemData
}