const options = ["rock", "paper", "scissors"];
let playerChoice;
let gameResult;

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
    return "Tie!";
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    return "You lose!";
  } else if (
    (computer === "scissors" && player === "rock") ||
    (computer === "rock" && player === "paper") ||
    (computer === "paper" && player === "scissors")
  ) {
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
}

function game() {
  getPlayerChoice();
}

game();
