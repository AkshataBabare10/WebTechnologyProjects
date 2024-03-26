let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock" , "paper", "scissors"];//for generating whole random number
    //rock, paper, scissor
    //Math.random()generating random number 0-1 we can generate 0-2 by multiplying
    //math.floor(math.random())-floor using to remove decimal numbers
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    //console.log("game was draw");
    msg.innerText = "Game Was Draw Play Again";
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if (userWin) {
        //console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        //console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
console.log("user choice = ",userChoice);
//genComputerChoice//generate computer choice //creating new function - this programming now as modular(creating functions)
const compChoice = genComputerChoice();
console.log("comp choice = ",compChoice);

if (userChoice===compChoice) {
    //Draw Condition
    drawGame();
} else {
    let userWin = true;//assumption
    if (userChoice==="rock") {
        //compchoice : scissors,paper
       userWin = compChoice === "paper"? false : true;
    }else if (userChoice==="paper") {
        //compchoice : rock,scissors
        userWin = compChoice === "scissors"? false : true;
    }
    else{
        //compchoice : rock,paper
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice , compChoice);
}
}


choices.forEach((choice)=>{
    // console.log(choice);
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked",choiceId);          //output : choice was clicked rock
    playGame(userChoice);
});
})