var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
if (hasScrollbar){
    let footer = document.getElementsByClassName("footer");
    footer[0].style.position = "unset";
}