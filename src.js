var container = document.getElementById("container");
let availRows, availCols;


availRows = Math.floor(window.innerHeight/ 50 - 3);
availCols = Math.floor(window.innerWidth/ 50) -1;

let arrayColorize = []; //array to store visited neighbors in order to visualize algos behavior

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

// returns array with x and y coordinate [x,y] using ID value
let coordinate = [];
function idToXY (id) {
    coordinate = [0,0]; // reset array to 0
    coordinate[0] = id % availRows;
    coordinate[1] = Math.floor(id / (availCols));

    return coordinate;
}

function xYtoID(x,y){
    let id = 0;
    if(x == 0 && y ==0){return id}
    id = x + (y * availCols);
    return id;
}

let startNode = 0;
let targetNode = 10;

makeGrid(availRows,availCols);

const colorStartNode = () => {document.getElementById(startNode).setAttribute("node-type","start")};

colorStartNode();
debugger;