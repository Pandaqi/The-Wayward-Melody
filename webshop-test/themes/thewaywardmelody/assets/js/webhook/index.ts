import connectPrintful from "./platforms/connectPrintful";
import connectPrintify from "./platforms/connectPrintify";
import connectSnipcart from "./platforms/connectSnipcart";

// @NOTE: final responses must be 200 OK, otherwise they'll assume webhook is broken and block it temporarily
export async function onRequest(eventContext) 
{
    const platforms = {
        printify: connectPrintify(),
        printful: connectPrintful()
    }

    const store = connectSnipcart(platforms);

    const consumed = await store.onRequest(eventContext);
    if(!consumed) { store.resultLogger.log("Nothing happened."); }
    return store.getResponse();
}