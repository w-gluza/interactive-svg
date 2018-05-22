document.addEventListener("DOMContentLoaded", loadSvg);

async function loadSvg() {
    // Load SVG

    let svgData = await fetch("pie.svg");
    let mySvg = await svgData.text();

    document.querySelector("#pie").innerHTML = mySvg;

}

document.querySelector("#pie").addEventListener("mouseover", showElement);
document.querySelector("#pie").addEventListener("mouseout", hideElement);

// a Map of oryginal colours
const original_colours = {};
let backed_up_colour = undefined;

function showElement(event) {


    let id = event.target.getAttribute("id");
    orgColor = document.querySelector("#" + id).getAttribute("fill");

    backed_up_colour = orgColor;

    document.querySelector("#" + id).setAttribute("fill", "#f2323");

    console.log(orgColor);
}

function hideElement(event) {

    let id = event.target.getAttribute("id");
    document.querySelector("#" + id).setAttribute("fill", backed_up_colour)

}