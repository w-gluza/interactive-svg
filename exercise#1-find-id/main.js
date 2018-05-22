document.addEventListener("DOMContentLoaded", loadSvg);


async function loadSvg() {
    // Load SVG

    let svgData = await fetch ("layers.svg");
    let mySvg = await svgData.text();

    document.querySelector("#layers").innerHTML = mySvg;
}


document.querySelector("#layers").addEventListener("click", showElement);
document.querySelector("#layers").addEventListener("mouseout", hideElement);

function showElement(event) {


    let id = event.target.getAttribute("id");

    document.querySelector("#" + event.target.id + "Text").style.display="block"
    

}

function hideElement(event) {

    let id = event.target.getAttribute("id");
    document.querySelector("#" + event.target.id + "Text").style.display="none"
}