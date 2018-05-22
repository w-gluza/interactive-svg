document.addEventListener("DOMContentLoaded", loadSvg);


async function loadSvg() {
    // Load SVG

    let svgData = await fetch ("layers.svg");
    let mySvg = await svgData.text();

    document.querySelector("#layers").innerHTML = mySvg;
}

document.querySelector("#layers").addEventListener("mouseover", showElement);
document.querySelector("#layers").addEventListener("mouseout", hideElement);

function showElement(){
document.querySelector("#mac").setAttribute('data-content', 'Updated text');
}

function hideElement(){
    document.querySelector("#mac").setAttribute('data-content', '');
}