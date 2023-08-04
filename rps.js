let computerChoice = null;

function getComputerChoice(){
    let computerDecider = Math.floor(Math.random() * 10);
    if (computerDecider < 4){
        computerChoice = 'Rock';
    } else if (computerDecider > 3 && computerDecider < 7){
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}


function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "It's a tie!";
    } else if (playerChoice === 'rock' && computerChoice == 'Scissors'){
        return "You win! Rock beats scissors.";
    } else if (playerChoice === 'scissors' & computerChoice === 'Paper'){
        return "You win! Scissors beat paper.";
    } else if (playerChoice === 'paper' & computerChoice === 'Rock'){
        return "You win! Paper beats rock";
    }
}

function startGame(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    getComputerChoice();

    const result = playRound(playerChoice, computerChoice);
    console.log(result)
}