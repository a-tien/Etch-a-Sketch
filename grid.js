const container = document.getElementById("container");
let number = 16;

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    
    for (i = 0; i < rows * cols; i++) {
        let grids = document.createElement("div");
        grids.setAttribute("id", "grid");
        container.appendChild(grids).className = "grid-item";
    };
};

function changeGrids() {
    const grids = document.querySelectorAll("#grid");

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
            grid.style.background = rgb;
        });
    });
}


let button = document.createElement("button");
document.body.appendChild(button).id = "button";
button.innerHTML = "Create New Grid";

button.addEventListener("click", function () {
    number = prompt("Enter the number in range 2 to 100:");
    container.innerHTML = "";
    makeRows(number, number);
    changeGrids();
});

makeRows(number, number);
changeGrids();
