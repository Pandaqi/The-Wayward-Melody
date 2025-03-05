export default async () =>
{
    const externalProductElements = Array.from(document.getElementsByClassName("product-summary-external")) as HTMLElement[];
    for(const elem of externalProductElements)
    {
        const url = elem.dataset.externalUrl;
        if(!url) 
        { 
            console.error("External product has no URL!", elem);
            continue; 
        }
    
        const response = await fetch(url);
        const body = await response.text();
    
        const div = document.createElement("div");
        div.innerHTML = body;
        const buyButton = div.getElementsByClassName("snipcart-add-item")[0] as HTMLButtonElement;
        if(!buyButton) 
        { 
            console.error(`Couldn't find buy button on external URL at ${url}`); 
            continue; 
        }
    
        const dataFromProduct = buyButton.dataset;

        elem.getElementsByClassName("product-external-title")[0].innerHTML = dataFromProduct.itemName ?? "Unknown Name";
        elem.getElementsByClassName("product-external-price")[0].innerHTML = dataFromProduct.itemPrice ?? "??.??";
        elem.getElementsByClassName("product-external-description")[0].innerHTML = dataFromProduct.itemDescription ?? "No Description";
        (elem.getElementsByClassName("product-external-image")[0] as HTMLImageElement).src = dataFromProduct.itemImage ?? "https://picsum.photos/500/386";

        console.log(`Loaded external product data for ${url}`, dataFromProduct, elem);
    }
    
}

