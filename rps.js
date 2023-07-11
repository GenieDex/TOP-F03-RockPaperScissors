const options = ["rock", "paper", "scissors"];
let playerChoice;
let gameResult;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = options[parseInt(Math.random() * 3)];
  return choice;
}

function getPlayerChoice() {
  document.getElementById("choiceRock").addEventListener("click", function() {
    playerChoice = "rock";
    displayResult();
  });
  document.getElementById("choicePaper").addEventListener("click", function() {
    playerChoice = "paper";
    displayResult();
  });
  document.getElementById("choiceScissors").addEventListener("click", function() {
    playerChoice = "scissors";
    displayResult();
  });
}

function rockPaperScissors(player, computer) {
  if (computer === player) {
    return "Tie!"
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    computerScore++;
    return "You lose!";
  } else if (
    (computer === "scissors" && player === "rock") ||
    (computer === "rock" && player === "paper") ||
    (computer === "paper" && player === "scissors")
  ) {
    playerScore++;
    return "You win!";
  } else if (
    player !== "rock" &&
    player !== "paper" &&
    player !== "scissors"
  ) {
    return "Error. Try again!";
  }
}

function displayResult() {
  let computer = getComputerChoice();
  if (computer === "rock") {
    document.getElementById("rivalChoice").innerHTML = "Your rival chose Rock";
  } else if (computer === "paper") {
    document.getElementById("rivalChoice").innerHTML = "Your rival chose Paper";
  } else if (computer === "scissors") {
    document.getElementById("rivalChoice").innerHTML = "Your rival chose Scissors";
  }
  gameResult = rockPaperScissors(playerChoice, computer);
  document.getElementById("gameResult").innerHTML = gameResult;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  scoreboard();
  
}

function scoreboard(){

  if (playerScore >= 5){
    document.getElementById("Score").innerHTML = "You won this battle!";
    document.getElementById("rivalChoice").innerHTML = "";
    document.getElementById("player").innerHTML = "";
    document.getElementById("computer").innerHTML = "";

    
  } else if (computerScore >= 5) {
    document.getElementById("Score").innerHTML = "You lost this battle!";
    document.getElementById("rivalChoice").innerHTML = "";
    document.getElementById("player").innerHTML = "";
    document.getElementById("computer").innerHTML = "";

  }
}

function game() {
  getPlayerChoice();
}

game();
