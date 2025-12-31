const urlString = window.location.href;
const paramString = urlString.split('?')[1];
const queryString = new URLSearchParams(paramString);

// this allows instantly querying stuff from URL
// step 1 = read it
let searchQuery = null;
for (let pair of queryString.entries()) 
{
    if(pair[0] != "query") { continue; }
    searchQuery = pair[1];
    break;
}

// step 2 = initialize pagefind
const pageFindParams = 
{ 
    element: "#search-results-container",
    showSubResults: true
}
const ui = new PagefindUI(pageFindParams);
console.log("### Trying to load PagefindUI", ui, pageFindParams, searchQuery);

// step 3 = if we had a search query already, dispatch a fake input event to already search for it
if(searchQuery)
{
    // input events only go through player keystrokes by default
    // that's why we have to dispatch a fake input event
    const searchInputs = document.getElementsByClassName("pagefind-ui__search-input");
    for(const inp of searchInputs)
    {
        inp.value = searchQuery;
        inp.dispatchEvent(new Event('input', { bubbles:true })); 
    }
}

