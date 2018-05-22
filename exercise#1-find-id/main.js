document.addEventListener("DOMContentLoaded", loadSvg);


async function loadSvg() {
    // Load SVG

    let svgData = await fetch ("layers.svg");
    let mySvg = await svgData.text();

    document.querySelector("#layers").innerHTML = mySvg;
}