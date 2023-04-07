/*
 * Font Switch: changes overall site font and individual page font.
 */



document.getElementById("fontSwitch1").addEventListener("click", changeFontOpen); 

function changeFontOpen() {
    // change font of all elements through body tag, default font is open sans so removes it in this case
    document.body.removeAttribute("style");

    // change img src of all pages (20 per chapter), make sure filename doesn't have preceding 0s to make it able to iterate through all
    for (let i = 1; i < 4; i++) {
    document.getElementById(i).src = "img/pages/page00" + i + "sans.png";
    }
}

document.getElementById("fontSwitch2").addEventListener("click", changeFontTimes); 

function changeFontTimes() {
    // slightly adjusted font size
    document.body.setAttribute("style", "font-family: Times, serif; font-size: 1.1rem;")

    for (let i = 1; i < 4; i++) {
        document.getElementById(i).src = "img/pages/page00" + i + "serif.png";
        }
}