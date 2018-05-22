document.addEventListener("DOMContentLoaded", loadSvg);


async function loadSvg() {
    // Load SVG

    let svgData = await fetch ("map.svg");
    let mySvg = await svgData.text();

    document.querySelector("#map").innerHTML = mySvg;
}