const gridAllBox = document.getElementsByClassName("grid");
const squareAllBox = document.querySelectorAll(".square");
const scoreCard = document.getElementById("score");
const leftTime = document.getElementById("time-left");
const classMole = document.querySelector(".time-left");
const buttonSelect = document.querySelector("button");

let result = 0;
let hitPosition;
let currentTime = 60;

function randamSqures() {
    squareAllBox.forEach(event => {
        event.classList.remove("mole");
    })

    let randamPosition = squareAllBox[Math.floor(Math.random() * 9)]
    randamPosition.classList.add("mole");

    hitPosition = randamPosition.id;
}


squareAllBox.forEach(squear => {
    squear.addEventListener("mousedown", () => { 
       if(squear.id == hitPosition) {
        result++;
        scoreCard.innerText = result;
        hitPosition = null; 
       }
    })
})


function moveMole() {
    let timerId = null;
    timerId = setInterval(randamSqures, 1000);
}

buttonSelect.addEventListener("click", () => {
    moveMole(); 
    let countDownTimerId = setInterval(countDown, 1000);
    function countDown() {
        currentTime--;
        leftTime.innerText = currentTime;

        if(currentTime == 0) {
            clearInterval(countDownTimerId);
            alert("Game Over and Your Result is " + result);
            currentTime = 60;
            // moveMole(false);
        }
    }
})


// IMP
// moveMole() function ko rokana hai time khatam hone ke baad