function setUp() {
    createGrid();
    initialiseHoverEvents();
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
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function initialiseHoverEvents() {
    const pixels = document.querySelectorAll(".pixel");
    console.log(pixels);
    pixels.forEach(pixel => pixel.addEventListener("mouseover", addGlowClass));
}

function addGlowClass(e) {
    e.target.classList.add("glow");
}