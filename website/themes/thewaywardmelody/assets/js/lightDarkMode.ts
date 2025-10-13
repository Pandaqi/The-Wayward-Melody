export const loadLightDarkMode = () => 
{
    const settingName = "light-mode";
    const inLightMode = localStorage.getItem(settingName) == "true";
    const buttons = Array.from(document.getElementsByClassName("button-light-mode"));
    
    const classToAdd = inLightMode ? "light-mode" : "dark-mode";
    const nodeDictatingMode = document.body;
    if(!nodeDictatingMode.classList.contains(classToAdd))
    {
        nodeDictatingMode.classList.add(classToAdd);
    }

    for(const btn of buttons)
    {
        btn.innerHTML = `Switch to ${ inLightMode ? "dark" : "light"} mode`;
        btn.addEventListener("click", () =>
        {
            localStorage.setItem(settingName, (!inLightMode).toString());
            window.location.reload();
        });
    }
}