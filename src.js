var container = document.getElementById("container");
let availRows, availCols;

availRows = Math.floor(window.innerHeight/ 50 - 3);
availCols = Math.floor(window.innerWidth/ 50) -1;


function makeGrid (rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.id = i;
        //cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
    }
}

let startNode = 5;
let targetNode = 5;


makeGrid(availRows,availCols);