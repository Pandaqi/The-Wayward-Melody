export default async () =>
{
    const foldableSections = Array.from(document.getElementsByClassName("section-foldable")) as HTMLElement[];
    for(const elem of foldableSections)
    {
        if(!elem.dataset.folded) { elem.dataset.folded = "true"; }

        const header = elem.getElementsByClassName("section-foldable-header")[0] as HTMLElement;
        const content = elem.getElementsByClassName("section-foldable-content")[0] as HTMLElement;

        // simply fold/unfold upon click
        const clickHandler = () => 
        {
            let isFolded = elem.dataset.folded == "true";
            isFolded = !isFolded;
            
            const newState = isFolded ? "true" : "false";
            elem.setAttribute("data-folded", newState);

            const newDisplayState = isFolded ? "none" : "block";
            content.style.display = newDisplayState;
        };
        header.addEventListener("click", clickHandler);

        // if currently false, initialize by folding
        const initCall = elem.dataset.folded == "false";
        if(initCall) { clickHandler(); }
    }
    
}

