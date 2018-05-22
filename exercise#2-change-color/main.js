document.addEventListener("DOMContentLoaded", loadSvg);

// const orgColor;

async function loadSvg() {
    // Load SVG

    let svgData = await fetch ("pie.svg");
    let mySvg = await svgData.text();

    document.querySelector("#pie").innerHTML = mySvg;

}

document.querySelector("#pie").addEventListener("mouseover", showElement);
function showElement(){
    
    // document.querySelector("#one").setAttribute("fill", "#903");

    let id = event.target.getAttribute("id");
    orgColor = document.querySelector("#"+id).getAttribute("fill");
    console.log(orgColor); 


}