export default () =>
{
    const urlComponents = window.location.href.split("?");
    if(urlComponents.length <= 1) { return; }
    const queryString = urlComponents[1];
    const params = new URLSearchParams(queryString);
    if(params.has("section"))
    {
        const elems = Array.from(document.querySelectorAll('.product-summary:not([data-section="' + params.get("section") + '"])')) as HTMLElement[];
        console.log(elems);
        for(const elem of elems)
        {
            elem.style.display = "none";
        }
    }
}