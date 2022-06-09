function setUp() {
    createGrid();
    initialiseButtons();
}

setUp();

function createGrid(resolution = 16) {
    const container = document.getElementById("grid");

    for (let row = 0; row < resolution; row++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let col = 0; col < resolution; col++) {
            const box = document.createElement("div");
            box.classList.add("pixel");
            box.addEventListener("mouseover", addGlowClass);
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

function changeResolution() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentNode.removeChild(row));
    let resolution = prompt("Enter desired resolution");
    createGrid(resolution);
}