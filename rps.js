document.addEventListener('DOMContentLoaded', function(){

    let computerChoice = null;
    let playerScore = 0;
    let computerScore = 0;

function getComputerChoice(){
    let computerDecider = Math.floor(Math.random() * 3) + 1;
    if (computerDecider === 1){
        computerChoice = 'rock';
    } else if (computerDecider === 2){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}


function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "It's a tie!";
    } else if (playerChoice === 'rock' && computerChoice == 'scissors'){
        playerScore +=1
        return "You win! Rock beats scissors.";
        
        
        
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        playerScore += 1
        return "You win! Scissors beat paper.";
      
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        playerScore += 1
        return "You win! Paper beats rock";

    } else {
        computerScore += 1
        return "Computer wins!";
  
    }
}

function scoreChecker(playerScore, computerScore){
    if (playerScore === 5){
        alert("You beat the computer!");
    }
    else if (computerScore === 5){
        alert("Computer wins.");
    }
}



const rockSelect = document.querySelector('#rockSelector')
const paperSelect = document.querySelector('#paperSelector')
const scissorsSelect = document.querySelector('#scissorsSelector')

function updateScores(){
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function updateAnnouncement(result){
    const announcementElement = document.getElementById('announcement');
    announcementElement.textContent= result;

}


rockSelect.addEventListener('click', () => {
    getComputerChoice();
    const result = playRound('rock', computerChoice);

    const scoreResult = scoreChecker(playerScore, computerScore);
    updateScores();
    updateAnnouncement(result);
});

paperSelect.addEventListener('click', () => {
    getComputerChoice();
    const result = playRound('paper', computerChoice);
    const scoreResult = scoreChecker(playerScore, computerScore);
    updateScores();
    updateAnnouncement(result);
});
scissorsSelect.addEventListener('click', () => {
    getComputerChoice();
    const result = playRound('scissors', computerChoice);
    const scoreResult = scoreChecker(playerScore, computerScore);
    updateScores();
    updateAnnouncement(result);
});



});

