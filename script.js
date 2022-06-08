function setUp() {
    const resolution = 16;
    const container = document.getElementById("grid");

    for (let row = 0; row < resolution; row++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let col = 0; col < resolution; col++) {
            const box = document.createElement("div");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

setUp();