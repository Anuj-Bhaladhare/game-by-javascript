const cardArray = [
    {
        name:"fries",
        img:"./images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"./images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"./images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"./images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"./images/milkshake.png"
    },
    {
        name:"pizza",
        img:"./images/pizza.png"
    },
    {
        name:"fries",
        img:"./images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"./images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"./images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"./images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"./images/milkshake.png"
    },
    {
        name:"pizza",
        img:"./images/pizza.png"
    }
]

// cardArray.sort( () => 0.5 - Math.random());


// const gridElement = document.getElementById("grid");


// const createBoard = () => {
//     for(let i = 0; i < cardArray.length; i++) {
//         const board = document.createElement("img");
//         board.setAttribute("src", "./images/blank.png");
//         board.setAttribute("deta-id", i);
//         gridElement.appendChild(board);
//         board.addEventListener("click", flipCard);
//         console.log(board, i);
//     }
// }

// createBoard();

// function flipCard(){
//     const dataClick = this.getAttribute(deta-id)
//     console.log("clicked", dataClick);
// }




cardArray.sort(() => 0.5 - Math.random());

const gridElement = document.getElementById("grid");
const result = document.getElementById("result");
let cardsChoosen = [];
let cardsChoosenId = [];
const wonArray = [];



const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const board = document.createElement("img");
    board.setAttribute("src", "./images/blank.png");
    board.setAttribute("data-id", i);
    gridElement.appendChild(board);
    board.addEventListener("click", flipCard);
    console.log(board, i);
  }
};

createBoard();

function chackMach() {
    const cards = document.querySelectorAll("img");

    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
    if(optionOneId === optionTwoId) {
        alert("wow you clicked a same image");
    }

    if(cardsChoosen[0] == cardsChoosen[1]) {
        alert("You Found A Match");
        cards[optionOneId[0]].setAttribute("src", "./images/white.png");
        cards[optionTwoId[1]].setAttribute("src", "./images/white.png");
        cards[optionOneId[0]].removeEventListener("click", flipCard);
        cards[optionTwoId[1]].removeEventListener("click", flipCard);
        wonArray.push(cardsChoosen);
    }
    else{
        cards[optionOneId].setAttribute("src", "./images/blank.png");
        cards[optionTwoId].setAttribute("src", "./images/blank.png");
        alert("sorry try again");
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    if(wonArray.length ==  cardsChoosenId.length) 
    {
        alert("yesss You Found All");
    }
}

function flipCard() {
    console.log(cardArray);
    const dataClick = this.getAttribute("data-id");
    cardsChoosen.push(cardArray[dataClick].name);
    cardsChoosenId.push(dataClick);
    console.log("clicked", dataClick);
    this.setAttribute("src", cardArray[dataClick].img)
    if(cardsChoosen === 2) {
        setTimeout (chackMach, 500);
    }
}
