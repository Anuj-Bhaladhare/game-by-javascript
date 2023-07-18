const choceComputer = document.getElementById("computer-choce");
const choceUserDis = document.getElementById("user-choce");
const resultChoice = document.getElementById("rsult");
const allButton = document.querySelectorAll("button");

let choceUser;
let computerChoics;

allButton.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e) => {
         choceUser = e.target.id;
         choceUserDis.innerHTML = choceUser;
         generatComputerChoice();
         searchResult();
    })
})

const generatComputerChoice = () => {
    let randamNumber = Math.floor(Math.random() * 3 ) + 1;
    console.log(randamNumber);
    if(randamNumber === 1) {
        computerChoics = "rock";
    }

    if(randamNumber === 2) {
        computerChoics = "paper";
    }

    if(randamNumber === 3) {
        computerChoics = "scissors";
    }
    choceComputer.innerHTML = computerChoics;
}

const searchResult = () => {
    if( choceUser === computerChoics) {
        resultChoice.innerHTML = "Ohho Its DroW..!";
    }
    if(computerChoics === "rock" && choceUser === "paper"){
        resultChoice.innerHTML = " You Win...!";
    }
    if(computerChoics === "rock" && choceUser === "scissors"){
        resultChoice.innerHTML = " You loos...!";
    }
    if(computerChoics === "paper" && choceUser === "scissors"){
        resultChoice.innerHTML = " You Win...!";
    }
    if(computerChoics === "paper" && choceUser === "rock"){
        resultChoice.innerHTML = " You loos...!";
    }
    if(computerChoics === "scissors" && choceUser === "rock"){
        resultChoice.innerHTML = " You Win...!";
    }
    if(computerChoics === "scissors" && choceUser === "paper"){
        resultChoice.innerHTML = " You loos...!";
    }
}

