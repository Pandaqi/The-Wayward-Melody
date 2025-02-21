import { convertTimezoneToShippingZone } from "./shippingZones";

const loadVariantFromDropdown = (dropdown:HTMLSelectElement) =>
{
    // find the associated button
    const dropdownParent = dropdown.parentElement as HTMLElement;
    const buttonContainers = Array.from(dropdownParent.getElementsByClassName("product-variant-buttons")) as HTMLElement[];
    if(buttonContainers.length <= 0) { console.error("No button container found to show this variant!", buttonContainers); return; }
    if(buttonContainers.length >= 2) { console.error("Too many button containers found to show this variant!", buttonContainers); return; }

    const buttonContainer = buttonContainers[0];
    const buttonID = dropdown.value;
    const buttonsWithID = Array.from(buttonContainer.querySelectorAll(`[data-item-id="${buttonID}"]`)) as HTMLElement[];
    if(buttonsWithID.length <= 0) { console.error(`No button found with ID ${buttonID}`); return; }
    if(buttonsWithID.length >= 2) { console.error(`Too many buttons found with ID ${buttonID}`, buttonsWithID); return; }

    console.log(buttonContainer);
    console.log(buttonsWithID);

    // display that button, disable all OTHER buttons
    const otherButtons = Array.from(buttonContainer.getElementsByClassName("snipcart-add-item")) as HTMLElement[];
    for(const otherButton of otherButtons)
    {
        otherButton.style.display = "none";
    }

    const button = buttonsWithID[0];
    button.style.display = "block";
    console.log(button);
    
    // switch image to variant, if possible
    const productImage = document.getElementById("product-image") as HTMLImageElement;
    if(productImage)
    {
        productImage.src = button.dataset.itemImage ?? "";
    }

    // display some dynamic text
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // returns something like Europe/Berlin
    const shippingZonesRaw = button.dataset.itemShippingZones ?? "";
    const hasShippingZones = shippingZonesRaw != "";
    const texts:string[] = [];
    const textContainer = Array.from(dropdownParent.getElementsByClassName("product-variant-dynamic-text"))[0] as HTMLElement;
    textContainer.innerHTML = "";
    if(hasShippingZones)
    {
        const shippingZones:string[] = shippingZonesRaw.split("|") ?? [];
        console.log(timezone, convertTimezoneToShippingZone(timezone), button.dataset.itemShippingZones);
        const canShip = shippingZones.includes( convertTimezoneToShippingZone(timezone) );
        const shippingResponse = canShip ? `That means this product/variant ships to you!` : `Unfortunately, this specific product/variant only ships to ${shippingZones}.`
        let stringShipping = `Our wizards guess that you're near <b>${timezone}</b>. ${shippingResponse}`;
        const shippingNode = document.createElement("div");
        textContainer.appendChild(shippingNode);
        shippingNode.classList.add("margin-s", "text-style-italic", "font-size-s")
        shippingNode.innerHTML = stringShipping;

        const shippingRemarkNode = document.createElement("span");
        shippingNode.appendChild(shippingRemarkNode);
        shippingRemarkNode.classList.add("margin-s", "text-style-italic","font-size-s", "text-color-mid");
        shippingRemarkNode.innerHTML = `(Wrong? Don't worry! At checkout you can input your shipping address.)`;

        if(button.dataset.itemWeight)
        {
            const stringWeight = `Weight (g): ${button.dataset.itemWeight}`;
            texts.push(stringWeight);    
        }

        if(button.dataset.itemWidth)
        {
            const stringSize = `Size (cm): ${button.dataset.itemWidth} x ${button.dataset.itemHeight} x ${button.dataset.itemLength} (WxHxL)`
            texts.push(stringSize);
        }

        const stringPlatform = `Platform: ${button.dataset.itemPlatform}`
        texts.push(stringPlatform);
    }

    const stringSku = `SKU: ${button.dataset.itemSku}`;
    texts.push(stringSku);

    const extraNode = document.createElement("div");
    textContainer.appendChild(extraNode);
    extraNode.classList.add("margin-s", "font-accent", "font-size-s");
    extraNode.innerHTML = texts.join("&nbsp;&middot;&nbsp;");
}

export default () =>
{
    // attach all dropdowns to the right button
    const pickerDropdowns = Array.from(document.getElementsByClassName("product-variant-dropdown")) as HTMLSelectElement[];
    for(const dropdown of pickerDropdowns)
    {
        dropdown.addEventListener("input", () => 
        {
            loadVariantFromDropdown(dropdown);
        });
        loadVariantFromDropdown(dropdown);
    }
}