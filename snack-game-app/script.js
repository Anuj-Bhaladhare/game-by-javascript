// Constent and variable of the game
let direction = {x : 0, y : 0};
let foodSound = new Audio("./music/food.mp3");
let gameOverSound = new Audio("./music/gameover.mp3");
let moveSound = new Audio("./music/move.mp3");
let musicSound = new Audio("./music/music.mp3");
let speed = 2;
let lastPaintTime = 0;





// Game Function
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime) / 1000 < 1/speed)
    console.log(ctime);
}





// main logic start here
window.requestAnimationFrame(main);