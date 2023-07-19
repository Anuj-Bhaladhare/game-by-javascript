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



// ============================= My neu Code =============================

// cardArray.sort(() => 0.5 - Math.random());

// const gridElement = document.getElementById("grid");
// const resultDisplay = document.getElementById("result");

// let cardsChoosen = [];
// let cardsChoosenId = [];
// const wonArray = [];


//  //create your board
// const createBoard = () => {
//   for (let i = 0; i < cardArray.length; i++) {
//     const board = document.createElement("img");
//     board.setAttribute("src", "./images/blank.png");
//     board.setAttribute("data-id", i);
//     board.addEventListener("click", flipCard);
//     gridElement.appendChild(board);
//   }
// }


// function chackMach() {
//     const cards = document.querySelectorAll("img");

//     const optionOneId = cardsChoosenId[0]
//     const optionTwoId = cardsChoosenId[1]

//     if(optionOneId == optionTwoId) {
//         board[optionOneId].setAttribute("src", "./images/blank.png");
//         board[optionTwoId].setAttribute("src", "./images/blank.png");
//         alert("You have Clicked the same image....!");
//     }

//     else if(cardsChoosen[0] === cardsChoosen[1]) {
//         alert("You Found A Match");
//         cards[optionOneId[0]].setAttribute("src", "./images/white.png");
//         cards[optionTwoId[1]].setAttribute("src", "./images/white.png");
//         cards[optionOneId[0]].removeEventListener("click", flipCard);
//         cards[optionTwoId[1]].removeEventListener("click", flipCard);
//         wonArray.push(cardsChoosen);
//     }
//     else{
//         cards[optionOneId].setAttribute("src", "./images/blank.png");
//         cards[optionTwoId].setAttribute("src", "./images/blank.png");
//         alert("sorry try again");
//     }
//     cardsChoosen = [];
//     cardsChoosenId = [];
//     resultDisplay.textContent = wonArray.length;
//     if(wonArray.length ===  cardArray.length/2) 
//     {
//         resultDisplay.textContent = "Congratulation! you found all";
//     }
// }

// //flip your card
// function flipCard() {
//     let dataClick = this.getAttribute("data-id");
//     cardsChoosen.push(cardArray[dataClick].name);
//     cardsChoosenId.push(dataClick);
//     this.setAttribute("src", cardArray[dataClick].img)
//     if(cardsChoosen === 2) {
//         setTimeout (chackMach, 500);
//     }
//     createBoard();
// }




// ============================= My MAM Code =============================


// cardArray.sort(() => 0.5 - Math.random())

//   const grid = document.querySelector('.grid')
//   const resultDisplay = document.querySelector('#result')
//   let cardsChosen = []
//   let cardsChosenId = []
//   let cardsWon = []

//   //create your board
//   function createBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//       const card = document.createElement('img')
//       card.setAttribute('src', 'images/blank.png')
//       card.setAttribute('data-id', i)
//       card.addEventListener('click', flipCard)
//       grid.appendChild(card)
//     }
//   }

//   //check for matches
//   function checkForMatch() {
//     const cards = document.querySelectorAll('img')
//     const optionOneId = cardsChosenId[0]
//     const optionTwoId = cardsChosenId[1]
    
//     if(optionOneId == optionTwoId) {
//       cards[optionOneId].setAttribute('src', 'images/blank.png')
//       cards[optionTwoId].setAttribute('src', 'images/blank.png')
//       alert('You have clicked the same image!')
//     }
//     else if (cardsChosen[0] === cardsChosen[1]) {
//       alert('You found a match')
//       cards[optionOneId].setAttribute('src', 'images/white.png')
//       cards[optionTwoId].setAttribute('src', 'images/white.png')
//       cards[optionOneId].removeEventListener('click', flipCard)
//       cards[optionTwoId].removeEventListener('click', flipCard)
//       cardsWon.push(cardsChosen)
//     } else {
//       cards[optionOneId].setAttribute('src', 'images/blank.png')
//       cards[optionTwoId].setAttribute('src', 'images/blank.png')
//       alert('Sorry, try again')
//     }
//     cardsChosen = []
//     cardsChosenId = []
//     resultDisplay.textContent = cardsWon.length
//     if  (cardsWon.length === cardArray.length/2) {
//       resultDisplay.textContent = 'Congratulations! You found them all!'
//     }
//   }

//   //flip your card
//   function flipCard() {
//     let cardId = this.getAttribute('data-id')
//     cardsChosen.push(cardArray[cardId].name)
//     cardsChosenId.push(cardId)
//     this.setAttribute('src', cardArray[cardId].img)
//     if (cardsChosen.length ===2) {
//       setTimeout(checkForMatch, 500)
//     }
//   }

//   createBoard()
// })



// ============================= Chat GPT Code =============================
  
  cardArray.sort(() => 0.5 - Math.random());
  
  const gridElement = document.getElementById("grid");
  const resultDisplay = document.getElementById("result");
  
  let cardsChoosen = [];
  let cardsChoosenId = [];
  const wonArray = [];
  
  // Create your board
  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      const board = document.createElement("img");
      board.setAttribute("src", "./images/blank.png");
      board.setAttribute("data-id", i);
      board.addEventListener("click", flipCard);
      gridElement.appendChild(board);
    }
  };
  
  function checkMatch() {
    const cards = document.querySelectorAll("img");
  
    const optionOneId = cardsChoosenId[0];
    const optionTwoId = cardsChoosenId[1];
  
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("You have clicked the same image....!");
    } else if (cardsChoosen[0] === cardsChoosen[1]) {
      alert("You Found A Match");
      cards[optionOneId].setAttribute("src", "./images/white.png");
      cards[optionTwoId].setAttribute("src", "./images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      wonArray.push(cardsChoosen);
    } else {
      cards[optionOneId].setAttribute("src", "./images/blank.png");
      cards[optionTwoId].setAttribute("src", "./images/blank.png");
      alert("Sorry, try again");
    }
  
    cardsChoosen = [];
    cardsChoosenId = [];
    resultDisplay.textContent = wonArray.length;
    if (wonArray.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found all.";
    }
  }
  
  // Flip your card
  function flipCard() {
    let dataClick = this.getAttribute("data-id");
    cardsChoosen.push(cardArray[dataClick].name);
    cardsChoosenId.push(dataClick);
    this.setAttribute("src", cardArray[dataClick].img);
    if (cardsChoosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
  
  createBoard();
  