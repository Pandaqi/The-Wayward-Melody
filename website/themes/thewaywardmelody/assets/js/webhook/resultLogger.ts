import { ShippingRate } from "./data";

export default class ResultLogger
{
    feedback:string[] = [];
    rates:ShippingRate[] = [];

    log(msg:string, ...extraArgs:any[])
    {
        console.log(msg, extraArgs);
        this.addFeedback(msg);
    }

    error(msg:string, ...extraArgs:any[])
    {
        console.error(msg, extraArgs);
        this.addFeedback(msg);
    }

    addFeedback(msg:string)
    {
        this.feedback.push(msg);
    }

    addRate(obj:ShippingRate)
    {
        this.rates.push(obj);
    }

    toJSONResponse()
    {
        return JSON.stringify({
            feedback: this.feedback,
            rates: this.rates
        });
    }
}

