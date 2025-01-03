# Documentation

## Serverless Function / API

All serverless functions are located in the `functions/` folder at HUGO website root. This function responds to webhooks to give dynamic information (such as temporary shipping rates or discounts), or to automatically signal other platforms when something happens.

The most common use case is a simple link between my Store (e.g. Snipcart) and a POD Merchandise Platform (e.g. Printify). When Store receives an order, it must signal Platform to create a new order. Conversely, as that order is processed and shipped, it sends back signals to have the Store update to the latest info.

Any shop or platform has to extend `InterfaceAPI`. Once created, 

* Write custom code in `isValidEvent(eventContext, masterStore)` to authenticate the request securely.
* Use `.addEventHook(name, func)` to set callbacks to trigger when a certain event (from a webhook) is received.
  * These callbacks are of the form `callbackName(jsonData, masterStore)`. 
  * The `this` value inside this function is the InterfaceAPI object that triggered the function.
* Use `.addMerchandisePlatform(interfaceInstance)` to connect one platform to use to the masterStore.

In the end, there can only be ONE ("master") store, like an employer. All other platforms are employees connected to it, and put to work when certain signals arrive.

At its core, the serverless function merely creates that one store, connects all other platforms and callbacks, then handles each request and gives a final response (with errors, what it did exactly, the information requested, etcetera).

## Translation Layer

To make all these APIs communicate with each other, they must all understand the same terminology. In other words,

* When they **produce** data (to be used by other interfaces), their final output must always be named and formatted as dictated by our convention
* When they **receive** data (from other interfaces), they can assume it's formatted by our convention.

What is that convention?

There are two properties for identifying orders.

* `externalToken` ( = a unique ID for this order which is crucial in connecting the SAME order across multiple platforms)
* `label` ( = a custom, readable name used for invoices or in communication about this order)

The possible STATUS codes for orders are as follows.

* `InProgress`: the order still has to be submitted / registered / communicated.
* `Processed`: the order is processed by the API/online systems. Noting else happened yet.
* `Shipped`: the order has been shipped (if physical)
* `Delivered`: the order has been delivered (if physical)
* `OnHold`: the order has been processed, but is on hold for some reason (payment troubles, disputed, out of stock, whatever).
* `Cancelled`: the order was manually cancelled.

The representation for ITEMS in an order is as follows.

* `sku` ( = unique product ID on the other platform)
* `quantity` ( = how many to buy)

The object for UPDATING (EXISTING) ORDERS is as follows.

* `status` (required) ( = the status code for how the order is doing; automatically converted through a custom STATUS translation dictionary)
* `trackingNumber` (optional)
* `trackingUrl` (optional)
* `metadata` (optional) ( = any manual data I want for tracking or guarantees)
  * I mostly use this to set a `submitted_to_merchant: true` once the order has been successfully created on some other API.

All billing related information is saved inside the `recipient` key.

* `fullName` ( = first and last name)
* `company` ( = company name, optional)
* `province` ( = 2-letter state code)
* `country` ( = 2-letter country code)
* `address1`
* `address2`
* `city`
* `postalCode` ( = zip code)
* `phone` ( = phone number, optional)
* `email`
* `taxNumber` ( = VAT number, optional)

## API Authentication

In general, authenticating incoming requests from webhooks works as follows.

* Each platform sends an extra header with some signature. (Example: `x-pfy-signature` for Printify.)
* Firstly, check if that header is present. If not, the event can't be from that platform!
* If present, now check if it matches your own signature.
  * Use an HMAC-sha256 to hash the request body/content, using your secret key as the key.
  * Check if the HEX representation of that matches the given signature.

For this to work, that "secret key" can be anything, but it has to be shared with the platform. (Otherwise they can't encrypt it, of course.)

Different platforms do this in different ways. Here are two common examples, going A->B or B->A.

* Printify: you make up your own key and save it on your server. Then, when _registering webhooks_, you _send that key along_ (in the `secret` property).
* Printful: when _registering webhooks_ they will _give you back a key_ (in the `result.secret_key` property). Make sure you save it on your server.

You can skip this and simply do no checks, or check against _domain_ from which the request comes. This is prone to abuse, however.






* `categories` (string[]) => if merchandise is included, this thing is labeled as such and sent to other platforms
* 