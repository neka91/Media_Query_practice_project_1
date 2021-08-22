window.onload = changeScreenSize;
window.onresize = changeScreenSize;

function changeScreenSize() {
    let screenWidth = window.innerWidth;

    document.getElementById('size').innerHTML = "Width: " + screenWidth + "px";
}