import { addSwipeListener, SwipeDirection } from "./gestures";
import { convertTimezoneToShippingZone } from "./shippingZones";

const loadVariantFromDropdown = (dropdown:HTMLSelectElement, carousel:HTMLElement) =>
{
    // hide everything first
    // @NOTE: we could do this by default in the HTML template itself, but that always feels like the worst solution, so trying to avoid that
    const buttonsPrev = Array.from(carousel.getElementsByClassName("image-carousel-prev")) as HTMLElement[];
    const buttonsNext = Array.from(carousel.getElementsByClassName("image-carousel-next")) as HTMLElement[];
    buttonsPrev.forEach((x) => x.style.display = "none");
    buttonsNext.forEach((x) => x.style.display = "none");

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
    const buttonSelected = buttonsWithID[0];
    buttonSelected.style.display = "block";

    const otherButtons = Array.from(buttonContainer.getElementsByClassName("snipcart-add-item")) as HTMLElement[];
    for(const otherButton of otherButtons)
    {
        if(otherButton == buttonSelected) { continue; }
        otherButton.style.display = "none";
    }

    const images = (buttonSelected.dataset.itemImages ?? "").split("|");
    const hasMultipleImages = images.length > 1;
    carousel.dataset.images = images.join("|");
    buttonsPrev.forEach((x) => x.style.display = hasMultipleImages ? "flex" : "none");
    buttonsNext.forEach((x) => x.style.display = hasMultipleImages ? "flex" : "none");

    loadCarouselItemAtIndex(carousel);

    // display some dynamic text
    // this is mostly relevant on physical goods to display their properties, shipping zones, etcetera
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // returns something like `Europe/Berlin`
    const shippingZonesRaw = buttonSelected.dataset.itemShippingZones ?? "";
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

        if(buttonSelected.dataset.itemWeight)
        {
            const stringWeight = `Weight (g): ${buttonSelected.dataset.itemWeight}`;
            texts.push(stringWeight);    
        }

        if(buttonSelected.dataset.itemWidth)
        {
            const stringSize = `Size (cm): ${buttonSelected.dataset.itemWidth} x ${buttonSelected.dataset.itemHeight} x ${buttonSelected.dataset.itemLength} (WxHxL)`
            texts.push(stringSize);
        }

        const stringPlatform = `Platform: ${buttonSelected.dataset.itemPlatform}`
        texts.push(stringPlatform);
    }

    const stringSku = `SKU: ${buttonSelected.dataset.itemSku}`;
    texts.push(stringSku);

    const extraNode = document.createElement("div");
    textContainer.appendChild(extraNode);
    extraNode.classList.add("margin-s", "font-accent", "font-size-s");
    extraNode.innerHTML = texts.join("&nbsp;&middot;&nbsp;");
}

const getCarouselImages = (carousel:HTMLElement) : string[] =>
{
    return (carousel.dataset.images ?? "").split("|");
}

const getCurrentCarouselItem = (carousel:HTMLElement) : string =>
{
    return getCarouselImages(carousel)[getCarouselIndex(carousel)];
}

const getCarouselIndex = (carousel:HTMLElement) : number =>
{
    return parseInt(carousel.dataset.carouselIndex ?? "0");
}

const getAllMediaNodes = (carousel:HTMLElement) : (HTMLImageElement|HTMLAudioElement|HTMLVideoElement)[] =>
{
    return Array.from(carousel.querySelectorAll(".image-carousel-image, .image-carousel-audio, .image-carousel-video"));
}

const getExtension = (path:string) : string =>
{
    const splitPath = path.split(".");
    return splitPath[splitPath.length - 1];
}

const itemIsImage = (path:string) : boolean => 
{
    return ["png", "jpg", "jpeg", "webp", "gif", "avif", "jxl"].includes(getExtension(path));
}

const itemIsVideo = (path:string) : boolean => 
{
    return ["mp4", "ogg", "webm"].includes(getExtension(path));
}

const itemIsAudio = (path:string) : boolean => 
{
    return ["mp3", "ogg", "m4a", "flac", "aac", "wav"].includes(getExtension(path));
}

const loadCarouselItemAtIndex = (carousel:HTMLElement, idx:number = -1) =>
{
    if(idx == -1) { idx = getCarouselIndex(carousel); }
    
    // grab current thing
    const item = getCurrentCarouselItem(carousel);

    // hide all
    const imageElements = Array.from(carousel.getElementsByClassName("image-carousel-image")) as HTMLImageElement[];
    const audioElements = Array.from(carousel.getElementsByClassName("image-carousel-audio")) as HTMLAudioElement[];
    const videoElements = Array.from(carousel.getElementsByClassName("image-carousel-video")) as HTMLVideoElement[];
    const elements = [imageElements, audioElements, videoElements].flat();
    for(const elem of elements)
    {
        elem.style.display = "none";
        if(elem instanceof HTMLAudioElement || elem instanceof HTMLVideoElement) { elem.pause(); }
    }

    // load only the one(s) we need
    if(itemIsImage(item))
    {
        imageElements.forEach((x) => { 
            x.style.display = "block"; 
            x.src = item; 
        });
    }

    if(itemIsVideo(item) || itemIsAudio(item))
    {
        const list = itemIsVideo(item) ? videoElements : audioElements;
        list.forEach((x) => { 
            x.style.display = "block"; 
            Array.from(x.getElementsByTagName("source")).forEach((x) => x.remove());
            const source = document.createElement("source");
            source.src = item;
            x.appendChild(source);
            x.load();
            x.play();
        });
    }
}

const carouselButtonCallback = (carousel:HTMLElement, dc:number) =>
{
    // move counter as needed
    // @NOTE: the `carousel` is the main element with class `image-carousel` here
    const numImages = getCarouselImages(carousel).length;
    const curCounter = getCarouselIndex(carousel);
    const newCounter = (curCounter + numImages + dc) % numImages;
    carousel.dataset.carouselIndex = newCounter.toString();

    // then load new situation
    loadCarouselItemAtIndex(carousel);
}

const createFullscreenOverlay = () =>
{
    const overlay = document.createElement("div");
    document.body.appendChild(overlay);

    overlay.style.display = "none";
    overlay.style.position = "fixed";
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

    const internalNodes = getAllMediaNodes(carousel);
    for(const node of internalNodes)
    {
        // make content clickable + swipable
        // if swiped, change carousel
        const swipeCallback = (dir:SwipeDirection) => 
        {
            const dirIndex = [SwipeDirection.LEFT, SwipeDirection.UP].includes(dir) ? -1 : 1;
            carouselButtonCallback(carousel, dirIndex);
        }

        // if clicked, open enlarged version
        const clickCallback = () =>
        {
            if(!(node instanceof HTMLImageElement)) { return; }
            overlay.style.display = "flex";
            const overlayImage = overlay.getElementsByTagName("img")[0] as HTMLImageElement;
            overlayImage.src = node.src;
            return false;
        }

        // @NOTE: we handle click and swipe in one go ourselves (instead of a "click" event listener), 
        // otherwise we get the default behavior for click fighting our custom behavior for swipe and it's an ugly mess
        addSwipeListener(node, swipeCallback, clickCallback);    
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