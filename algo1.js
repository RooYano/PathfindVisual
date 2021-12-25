let row = 5;
let col = 5;
let m = []; //nested array for matrix to create a grid of size row x col

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Queue {
    constructor(head = null) {
        this.head = head;
    }
}

let startCol = new Node(0);
let startRow = new Node(0);

//queue
let nextCol = new Queue(startCol);
let nextRow = new Queue(startRow); 

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

    return this.head
}

Queue.prototype.dequeue = function () {
    let current = this.head;

    if(current) {
        let elm = current.val;
        current = current.next;
        this.head = current;

        return elm;
    }
    console.log("queue empty");
    return null;
}
/*test code

startCol;
nextCol.enqueue(3);
nextCol.enqueue(4);
let storage = nextCol.dequeue();
console.log(storage)


*/


//counter variables for steps taken
let totalMoves = 0;
let nodesLeft = 0; //adding nodes to check like peels of an onion. shows how many to dequeue before moving to next layer
let nodesNext = 1; //

//end  reached?
let reachedEnd = false;

//boolean matrix to keep track of visited cells
let visited = [];

//vectors for direction when determining neighbors
deltaRow = [-1, 1, 0, 0];
deltaCol = [0, 0, 1, -1];

function findPath(){

}
