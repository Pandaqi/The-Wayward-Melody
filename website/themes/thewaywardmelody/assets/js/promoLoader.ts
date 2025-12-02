export const loadDynamicPromotions = () =>
{
    const nodes = Array.from(document.getElementsByClassName("promo-data-cached")) as HTMLDivElement[];
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getTime();
    let nodeSelected : HTMLDivElement;
    for(const node of nodes)
    {
        const dateStart = Date.parse(currentYear + "-" + node.dataset.start);
        const dateEnd = Date.parse(currentYear + "-" + node.dataset.end);
        if(dateStart > currentDate) { continue; }
        if(dateEnd < currentDate) { continue; }
        nodeSelected = node;
        break;
    }

    if(!nodeSelected) { return; }

    const urls = nodeSelected.dataset.urls.split(",");
    const images = nodeSelected.dataset.images.split(",");
    const headings = nodeSelected.dataset.headings.split(",");
    const title = nodeSelected.dataset.title;
    const desc = nodeSelected.dataset.desc;

    const promo = document.createElement("div");
    const h2 = document.createElement("h2");
    promo.appendChild(h2);
    h2.style.marginTop = "2em";
    h2.innerHTML = "🎁 Promo: " + title + " 🎁";

    const description = document.createElement("p");
    promo.appendChild(description);
    description.classList.add("align-center");
    description.innerHTML = desc;

    const nav = document.createElement("nav");
    promo.appendChild(nav);

    const ul = document.createElement("ul");
    nav.appendChild(ul);
    ul.classList.add("remove-list-styling", "flex", "flex-wrap", "flex-center", "flex-equal-size", "margin-m", "gap-m", "flex-equal-size")

    for(let i = 0; i < urls.length; i++)
    {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.classList.add("flex", "flex-wrap", "flex-center", "limit-width-xs", "bg-color-dark-x", "rounded-xs", "hover_popup");

        const a = document.createElement("a");
        li.appendChild(a);
        a.classList.add("padding-s");
        a.href = urls[i];

        const h3 = document.createElement("h3");
        a.appendChild(h3);
        h3.classList.add("margin-none");
        h3.style.marginBottom = "0.25em";
        h3.innerHTML = headings[i];

        const img = document.createElement("img");
        a.appendChild(img);
        img.src = images[i];
        img.loading = "lazy";
        img.decoding = "async";
    }
    
    const containers = Array.from(document.getElementsByClassName("promo-dynamic")) as HTMLDivElement[];
    for(const container of containers)
    {
        container.appendChild(promo);
    }
}