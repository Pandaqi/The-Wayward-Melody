import connectSnipcart from "../platforms/connectSnipcart";

export async function onRequest(eventContext) 
{
    const store = connectSnipcart({}, true);
    await store.onRequest(eventContext);
    return store.getResponse();
}