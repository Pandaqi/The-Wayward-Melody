import { convertTimezoneToShippingZone } from "./shippingZones";

const loadVariantFromDropdown = (dropdown:HTMLSelectElement) =>
{
    // find the associated button
    const buttonID = dropdown.value;
    const buttonsWithID = Array.from(dropdown.getElementsByClassName("snipcart-add-item")) as HTMLButtonElement[];
    if(buttonsWithID.length <= 0) { console.error("Can't show button for this variant!", buttonID); return; }
    if(buttonsWithID.length >= 2) { console.error("Can't load multiple buttons at once for a variant!", buttonsWithID); return; }

    // display that button, disable all OTHER buttons
    const button = buttonsWithID[0];
    button.style.display = "block";

    const parentList = button.parentElement as HTMLElement;
    const otherButtons = Array.from(parentList.children) as HTMLElement[];
    for(const otherButton of otherButtons)
    {
        otherButton.style.display = "none";
    }
    
    // switch image to variant, if possible
    const productImage = document.getElementById("product-image") as HTMLImageElement;
    if(productImage)
    {
        productImage.src = button.dataset.itemImage ?? "";
    }

    // display some dynamic text
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // returns something like Europe/Berlin
    const shippingZones:string[] = button.dataset.itemShippingZones?.split("|") ?? [];
    const texts:string[] = [];
    if(shippingZones.length > 0)
    {
        const canShip = shippingZones.includes( convertTimezoneToShippingZone(timezone) );
        const shippingResponse = canShip ? `That means this product can ship to your address!` : `Unfortunately, this product only ships to ${shippingZones}.`
        let stringShipping = `Our wizards have guessed that you are in ${timezone}. ${shippingResponse} (Wrong? Don't worry! A full address check is only done at checkout, once you've input your actual shipping address.)`;
        texts.push(stringShipping);

        const stringWeight = `Weight (g): ${button.dataset.itemWeight}`;
        texts.push(stringWeight);

        const stringSize = `Size (cm): ${button.dataset.itemWidth} x ${button.dataset.itemHeight} x ${button.dataset.itemLength} (WxHxL)`
        texts.push(stringSize);

        const stringPlatform = `Platform: ${button.dataset.itemPlatform}`
        texts.push(stringPlatform);
    }

    const stringSku = `SKU: ${button.dataset.itemSku}`;
    texts.push(`SKU: ${stringSku}`);

    const textContainer = Array.from(dropdown.getElementsByClassName("product-variant-dynamic-text"))[0] as HTMLElement;
    textContainer.innerHTML = texts.join("&nbsp;&middot;&nbsp;")
}

export default () =>
{
    // hide all buttons except one (first in list)
    const buttonLists = Array.from(document.getElementsByClassName("product-variant-buttons")) as HTMLButtonElement[];
    for(const list of buttonLists)
    {
        const buttons = Array.from(list.children) as HTMLButtonElement[];
        for(let i = 1; i < buttons.length; i++)
        {
            buttons[i].style.display = "none";
        }
    }

    // attach all dropdowns to the right button
    const pickerDropdowns = Array.from(document.getElementsByClassName("product-variant-dropdown")) as HTMLSelectElement[];
    for(const dropdown of pickerDropdowns)
    {
        dropdown.addEventListener("input", () => 
        {
            loadVariantFromDropdown(dropdown);
        });
    }
}