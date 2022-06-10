function setUp() {
    createGrid();
    initialiseButtons();
}

setUp();

function createGrid(resolution = 16) {
    const container = document.getElementById("grid");
    let gridSize = container.offsetWidth; // cannot use .style.width as this only returns inline styles, and the grid container width is set in an external stylesheet
    let pixelSize = gridSize / resolution;

    for (let row = 0; row < resolution; row++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let col = 0; col < resolution; col++) {
            const box = document.createElement("div");
            box.classList.add("pixel");
            box.addEventListener("mouseover", addGlowClass);
            box.style.width = pixelSize + "px";
            box.style.height = pixelSize + "px";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function addGlowClass(e) {
    e.target.classList.add("glow");
}

function initialiseButtons() {
    const reset = document.getElementById("reset");
    reset.addEventListener("click", resetGrid);
    const resolution = document.getElementById("resolution");
    resolution.addEventListener("click", changeResolution);
}

function resetGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.classList.remove("glow"));
}

function clearGrid(){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentNode.removeChild(row));
}

function changeResolution() {
    let resolution = "";
    while (true) {
        resolution = prompt("Enter desired resolution");
        if (resolution === null) { // User presses cancel
            break;
        } else if (!Number.isInteger(Number(resolution)) || 
                resolution < 1 || resolution > 100) {
            alert("Please enter an integer between 1 and 100");
        } else { // User has entered a valid input
            clearGrid();
            createGrid(resolution);
            break;
        }
    }   
}