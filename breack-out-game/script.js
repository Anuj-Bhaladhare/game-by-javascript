const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHight = 20;



// Creating A block
class block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis , yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHight];
    }
}

// My Block
constblocks = [
    new block(10, 270);
]


// Drow my Block
function addBlocks() {
    for(let i = 0; i < block.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.bottom = block[i].bottomLeft[0];
        block.style.left = "100px";
        grid.appendChild(block);
    }
}

addBlocks();