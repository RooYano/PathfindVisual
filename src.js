
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
    coordinate[0] = id % availCols;
    coordinate[1] = Math.floor(id / (availCols));

    return coordinate;
}

function xYtoID(x,y){
    let id = 0;
    if(x == 0 && y ==0){return id}
    id = x + (y * availCols);
    return id;
}

function recolorEndNode(target){
    document.getElementById(target).style.backgroundColor = "yellow";
}

let startNode = 50;
let targetNode = 160; 

makeGrid(availRows,availCols);

const colorStartNode = () => {document.getElementById(startNode).classList.add('start')};
const colorEndNode = () => {document.getElementById(targetNode).classList.add('end')}

colorStartNode();
colorEndNode();

function visualTransition (array){
    for (let i = 0;i < array.length; i++){
        (function(index){
            setTimeout(function(){document.getElementById(array[i]).classList.add('circle')},50+(50*index))
        })(i)
    }
        // const a = (index) =>{
        //     let container = document.getElementById(cells);
        //     container.classList.add('circle');
        // }
        // a();
        //setTimeout(a,500);
}
debugger;