function getComputerChoice() {
    let choice = parseInt(Math.random()*(3-0) + 1);
    return choice;
}
function numberToOption(option) {
   
    if (option = 0) {
        return "rock";
    } else if (option = 1){
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerChoice() {
    let choice = prompt("Rock = 1, Paper = 2, Scissors = 3");
    return choice;
}

function rockPaperScissors (player, computer) {
    
    /* Rock = 1, Paper = 2, Scissors = 3*/
    /* Player Scissors, computer Rock*/
    if(computer == 1 && player == 3){
        return "You lose!";
    }else if (computer == 3 && player == 1){
        return "You win!";
    }
    else if (computer > player) {
        return "You lose!";
    } else if (computer < player){
        return "You win!";
    } else if (computer == player) {
        return "Tie!";
    }
}


    function game(){
        for (i = 0; i < 5; i++) {
            let computerNum = getComputerChoice();
            alert(computerNum);
            let playerNum = getPlayerChoice();
            document.write(rockPaperScissors(playerNum,computerNum));
        }
    }
game();