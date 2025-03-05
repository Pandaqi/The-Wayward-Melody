const convertNodeToSnipcartObject = (elem:HTMLButtonElement) =>
{
    const obj:Record<string,any> = {
        id: elem.dataset.itemId,
        name: elem.dataset.itemName,
        price: elem.dataset.itemPrice,
        url: elem.dataset.itemUrl,
        quantity: 1,
        maxQuantity: elem.dataset.itemMaxQuantity,
        description: elem.dataset.itemDescription,
        image: elem.dataset.itemImage,
        categories: elem.dataset.itemCategories?.split("|"),
        shippable: elem.dataset.itemShippable,
    }

    // for efficiency (and making sure we don't confuse the API), only include this if relevant
    const fileGuid = elem.dataset.itemFileGuid;
    if(fileGuid) { obj.fileGuid = elem.dataset.itemFileGuid; }

    // same with custom fields
    let customFieldExists = true;
    let counter = 0;
    const customFields:Record<string,any>[] = [];
    while(customFieldExists)
    {
        counter++;
        customFieldExists = elem.dataset["itemCustom" + counter + "Name"] != undefined;
        if(!customFieldExists) { break; }

        const customFieldData = {
            name: elem.dataset["itemCustom" + counter + "Name"],
            type: elem.dataset["itemCustom" + counter + "Type"],
            value: elem.dataset["itemCustom" + counter + "Value"]
        }
        customFields.push(customFieldData);
    }

    if(customFields.length > 0) { obj.customFields = customFields; }
    return obj;
}

const getCartItemsById = (buyButtons:HTMLButtonElement[]) =>
{
    const bundleItemIds = buyButtons.map((btn) => btn.dataset.itemId);
    // @ts-ignore
    const itemsInCart = Snipcart.store.getState().cart.items.items;
    const arr:Record<string,any>[] = [];
    for(const item of itemsInCart)
    {
        const isPartOfBundle = bundleItemIds.includes(item.id);
        if(!isPartOfBundle) { continue; }
        const uniqueItemId = item.uniqueId;
        const obj = { uniqueId: uniqueItemId }
        arr.push(obj);
    }
    return arr;
}

const getItemsAsSnipcartObjects = (buyButtons:HTMLButtonElement[]) =>
{
    const arr:any[] = [];
    for(const btn of buyButtons)
    {
        arr.push(convertNodeToSnipcartObject(btn));
    }
    console.log(arr);
    return arr;
}

const addItemsToCart = async (buyButtons:HTMLButtonElement[]) =>
{
    try {
        // @ts-ignore
        await Snipcart.api.cart.items.add(...getItemsAsSnipcartObjects(buyButtons));
    } catch(error) {
        console.log(error);
    }
}

const removeItemsFromCart = async (buyButtons:HTMLButtonElement[]) =>
{
    try {
        const list = getCartItemsById(buyButtons);
        for(const elem of list)
        {
            // @ts-ignore
            await Snipcart.api.cart.items.remove(elem);
        }
    } catch(error) {
        console.log(error);
    }
}

export default async () =>
{
    const buyButtons = Array.from(document.getElementsByClassName("snipcart-add-item")) as HTMLButtonElement[];
    const bundleButtonsAdd = Array.from(document.getElementsByClassName("product-bundle-add")) as HTMLButtonElement[];
    for(const btn of bundleButtonsAdd)
    {
        // the disabled thing is to prevent people from clicking multiple times when there's a delay/nothing seems to happen
        btn.addEventListener("click", async () => {
            btn.disabled = true;
            await addItemsToCart(buyButtons);
            btn.disabled = false;
        });
    }

    const bundleButtonsRemove = Array.from(document.getElementsByClassName("product-bundle-remove")) as HTMLButtonElement[];
    for(const btn of bundleButtonsRemove)
    {
        btn.addEventListener("click", async () => {
            btn.disabled = true;
            await removeItemsFromCart(buyButtons);
            btn.disabled = false;
        });
    }
}