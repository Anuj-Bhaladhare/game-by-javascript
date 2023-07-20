const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

// Creating A block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis - blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis - blockHeight];
    }
}

// My Blocks
const blocks = [
    new Block(10, 270)
];

console.log(blocks);

// Draw my Blocks
// function addBlocks() {
//     for (let i = 0; i < blocks.length; i++) {
//         const block = document.createElement("div");
//         block.classList.add("block");
//         block.style.bottom = blocks[i].bottomLeft[1] + "px";
//         block.style.left = blocks[i].bottomLeft[0] + "px";
//         grid.appendChild(block);
//     }
// }

// addBlocks();
