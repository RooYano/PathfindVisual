let row = availRows;
let col = availCols;

var m = new Array(row); //nested array for matrix to create a grid of size row x col
for(let cl = 0; cl < col; cl++){
    m[cl] = new Array(col);
}

//function for id to XY in src.js file
let startCoordinate = idToXY(startNode);
let startCol = startCoordinate[0];
let startRow = startCoordinate[1];

let endCoordinate = idToXY(targetNode);
let endCol = endCoordinate[0];
let endRow = endCoordinate[1];

m[endCol][endRow]= 'End';

//counter variables for steps taken
let totalMoves = 0;
let nodesLeft = 1; //adding nodes to check like peels of an onion. shows how many to dequeue before moving to next layer
let nodesNext = 1; //

//end  reached?
let reachedEnd = false;

//vectors for direction when determining neighbors
let deltaRow = [-1, 1, 0, 0];
let deltaCol = [0, 0, 1, -1];

//boolean matrix to keep track of visited cells
let visited = new Array (row);
for (let v = 0; v < col; v++){
    visited[v]=new Array(col);
}

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Queue {
    constructor(head = null) {
        this.head = head;
        this.size = 1; // start size is one because we start off with starting node already in Q
    }
}

let startColNode = new Node(startCol);
let startRowNode = new Node(startRow);

//queue
let nextCol = new Queue(startColNode);
let nextRow = new Queue(startRowNode); 

Queue.prototype.enqueue = function (data){
    let nodeAdd = new Node(data);

    //if list is empty, the head will point to new node
    if(!this.head){
        this.head = nodeAdd;
        return this.head;
    }

    //i can optimize this later
    let tail = this.head;
    while (tail.next !== null){
        tail = tail.next;
    }
    tail.next = nodeAdd;

    this.size++;

    return this.head
}

Queue.prototype.dequeue = function () {
    let current = this.head;

    if(current) {
        let elm = current.val;
        current = current.next;
        this.head = current;
        this.size--;

        return elm;
    }
    console.log("queue empty");
    return null;
}

function findPath(){
    visited[startCol][startRow] = true;

    while (nextRow.size > 0||nextCol.size >0){
        r = nextRow.dequeue();
        c = nextCol.dequeue();
        //console.log(nextRow.size);
        //console.log(`R is ${r} and c is ${c} and m[c][r] gives ${m[c][r]}`);
        if (m[c][r]  == 'End') {
            reachedEnd = true;
            //console.log("end reached");
            break;
        }
        exploreNeighbor(r,c); 
        nodesLeft--;
        if(nodesLeft==0){
            nodesLeft = nodesNext;
            nodesNext=0;
            totalMoves++;
        }
    }
    
    if(reachedEnd==true){
            //console.log("reachedEnd container");
            colorEndNode();

            return totalMoves;
    }

    return -1;
} 
 
function exploreNeighbor (r, c){
    for (let i = 0; i < 4; i++) {
        neighborR = r + deltaRow[i];
        neighborC = c + deltaCol[i];
        //console.log(`neighborR is ${neighborR} and neighbor C is ${neighborC}`);

        if(neighborR < 0 || neighborC < 0){
            //console.log("escaped at 1");
            continue;
        }

        if(neighborR >= row || neighborC >= col){
            //console.log("escaped at 2");
            continue;
        }

        if (visited[neighborC][neighborR] == true) {
            //console.log("escaped at 3");
            continue;
        }

        if(m[neighborR][neighborC]=='W') { // W for wall
            continue;
        }

        nextRow.enqueue(neighborR);
        nextCol.enqueue(neighborC);
        //console.log(`next Row queued up is ${nextRow.head.val}`);
        visited[neighborC][neighborR]= true;

        arrayColorize.push(xYtoID(neighborC,neighborR));//memory of the order at which nodes were visited

        nodesNext++;
    }
}

function printVisited (){
    for (let i = 0; i< row; i++){
        for (let j = 0; j<col; j++){
            if(visited[i][j]==true){
                console.log(`coordinate x:${i} y:${j} traveled thru`);
            }
        }
    }
}

findPath();
visualTransition(arrayColorize);

// printVisited();
