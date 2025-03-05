import { convertTimezoneToShippingZone } from "./shippingZones";

const loadVariantFromDropdown = (dropdown:HTMLSelectElement, carousel:HTMLElement) =>
{
    // find the associated button
    const buttonContainers = Array.from(carousel.getElementsByClassName("product-variant-buttons")) as HTMLElement[];
    if(buttonContainers.length <= 0) { console.error("No button container found to show this variant!", buttonContainers); return; }
    if(buttonContainers.length >= 2) { console.error("Too many button containers found to show this variant!", buttonContainers); return; }

    const buttonContainer = buttonContainers[0];
    const buttonID = dropdown.value;
    const buttonsWithID = Array.from(buttonContainer.querySelectorAll(`[data-item-id="${buttonID}"]`)) as HTMLElement[];
    if(buttonsWithID.length <= 0) { console.error(`No button found with ID ${buttonID}`); return; }
    if(buttonsWithID.length >= 2) { console.error(`Too many buttons found with ID ${buttonID}`, buttonsWithID); return; }

    // display that button, disable all OTHER buttons
    const otherButtons = Array.from(buttonContainer.getElementsByClassName("snipcart-add-item")) as HTMLElement[];
    for(const otherButton of otherButtons)
    {
        otherButton.style.display = "none";
    }

    const button = buttonsWithID[0];
    button.style.display = "block";
    
    // switch image(s) to variant, if possible
    const productImages = Array.from(carousel.getElementsByClassName("image-carousel-image")) as HTMLImageElement[];
    for(const productImage of productImages)
    {
        productImage.src = button.dataset.itemImage ?? "";
        productImage.dataset.images = button.dataset.itemImages;
        const hasMultipleImages = productImage.dataset.images.split("|").length > 1;
        const parentElement = productImage.parentElement as HTMLElement;
        const buttonsPrev = Array.from(parentElement.getElementsByClassName("image-carousel-prev")) as HTMLElement[];
        const buttonsNext = Array.from(parentElement.getElementsByClassName("image-carousel-next")) as HTMLElement[];
        buttonsPrev.forEach((x) => x.style.display = hasMultipleImages ? "flex" : "none");
        buttonsNext.forEach((x) => x.style.display = hasMultipleImages ? "flex" : "none");
    }

    // display some dynamic text
    // this is mostly relevant on physical goods to display their properties, shipping zones, etcetera
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // returns something like `Europe/Berlin`
    const shippingZonesRaw = button.dataset.itemShippingZones ?? "";
    const hasShippingZones = shippingZonesRaw != "";
    const texts:string[] = [];
    const textContainer = Array.from(carousel.getElementsByClassName("product-variant-dynamic-text"))[0] as HTMLElement;
    textContainer.innerHTML = "";
    if(hasShippingZones)
    {
        const shippingZones:string[] = shippingZonesRaw.split("|") ?? [];
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

const carouselButtonCallback = (carousel:HTMLElement, dc:number) =>
{
    // grab images to change
    const imageElements = Array.from(carousel.getElementsByClassName("image-carousel-image")) as HTMLImageElement[];
    for(const imageElement of imageElements)
    {
        // check what other images it could be
        const images = imageElement.dataset.images.split("|");
        const numImages = images.length;
        
        // move counter as needed
        const curCounter = parseInt(imageElement.dataset.carouselIndex ?? "0");
        const newCounter = (curCounter + numImages + dc) % numImages;
        const newSource = images[newCounter];
    
        // update to new situation
        imageElement.src = newSource;
        imageElement.dataset.carouselIndex = newCounter.toString();
    }
}

const createFullscreenOverlay = () =>
{
    const overlay = document.createElement("div");
    document.body.appendChild(overlay);

    overlay.style.display = "none";
    overlay.style.position = "absolute";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.top = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "rgba(0,0,0,0.66)";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.padding = "3em";

    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    // close it again
    overlay.addEventListener("click", () => 
    {
        overlay.style.display = "none";
    });

    return overlay;
}

const activateCarousel = (carousel:HTMLElement, overlay:HTMLElement) =>
{
    // attach all dropdowns to the right product-button
    const pickerDropdowns = Array.from(carousel.getElementsByClassName("product-variant-dropdown")) as HTMLSelectElement[];
    for(const dropdown of pickerDropdowns)
    {
        // initialization call
        loadVariantFromDropdown(dropdown, carousel);

        // respond to changes
        dropdown.addEventListener("input", () => 
        {
            loadVariantFromDropdown(dropdown, carousel);
        });
    }

    // make image clickable
    const imageElements = Array.from(carousel.getElementsByClassName("image-carousel-image")) as HTMLImageElement[];
    for(const imageElement of imageElements)
    {
        // if clicked, open enlarged version
        imageElement.addEventListener("click", () => 
        {
            overlay.style.display = "flex";
            const overlayImage = overlay.getElementsByTagName("img")[0] as HTMLImageElement;
            overlayImage.src = imageElement.src;
        });
        
    }

    // attach all images to carousel changers
    const buttonsPrev = Array.from(carousel.getElementsByClassName("image-carousel-prev")) as HTMLElement[];
    const buttonsNext = Array.from(carousel.getElementsByClassName("image-carousel-next")) as HTMLElement[];
    for(const button of buttonsPrev)
    {
        button.addEventListener("click", () => carouselButtonCallback(carousel, -1));
    }

    for(const button of buttonsNext)
    {
        button.addEventListener("click", () => carouselButtonCallback(carousel, +1));
    }
}

export default () =>
{
    // create the full-screen overlay in case images are clicked
    const overlay = createFullscreenOverlay();

    // make all image carousels work
    const carousels = Array.from(document.getElementsByClassName("image-carousel")) as HTMLElement[];
    for(const carousel of carousels)
    {
        activateCarousel(carousel, overlay);
    }

    // randomize banner images => move to other TS file?
    const bannerImages = Array.from(document.getElementsByClassName("banner-image")) as HTMLElement[];
    for(const bannerImage of bannerImages)
    {
        const computedStyle = window.getComputedStyle(bannerImage);
        // @NOTE: Chrome keeps the style in the background property; Firefox and others put it into background-image
        // So select whichever one returns a value
        let curBackgroundString = computedStyle["background-image"];
        if(!curBackgroundString.includes("url")) { curBackgroundString = computedStyle.background; }
        const possibleImages = bannerImage.dataset.images.split("|");
        const randImage = possibleImages[Math.floor(Math.random() * possibleImages.length)];
        const regex = /url\((.+?)\)/i;
        const newBackgroundString = curBackgroundString.replace(regex, `url(${randImage})`);
        bannerImage.style.backgroundImage = newBackgroundString;
        console.log(`[OK] Replaced banner image! Old = ${curBackgroundString}. New = ${newBackgroundString}.`);
    }
}