
// GLOBAL VARIABLES

let playerScore = 0;
let computerScore = 0;

// Defining event listeners for buttons

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
    playRound('rock');
});
paperButton.addEventListener('click', () => {
    playRound('paper');
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});

// Defining event listeners for text

const playerText = document.querySelector('#player-choice');
const computerText = document.querySelector('#computer-choice');

const resultText = document.querySelector('#round-result');
const scoreText = document.querySelector('#current-score');
const finalResult = document.querySelector('#winner');


// Computer makes choice

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomNumber(3);
    if (computerChoice==0) {
        return 'rock';
    } else if (computerChoice==1) {
        return 'paper';
    } else if (computerChoice==2){
        return 'scissors';
    }
} 

// Round is played

function playRound(player) {
    finalResult.textContent = '';

    let playerChoice = player;
    let computerChoice = getComputerChoice();

    playerText.textContent = `Player choice: ${playerChoice}`;
    computerText.textContent = `Computer choice: ${computerChoice}`;
    
    if (playerChoice === computerChoice) {
        resultText.textContent = "TIE!";
    } else if (playerChoice == 'rock' && computerChoice == 'paper' || 
               playerChoice == 'paper' && computerChoice == 'scissors' ||
               playerChoice == 'scissors' && computerChoice == 'rock'
    ) {
        resultText.textContent = `COMPUTER WON! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
    } else if (playerChoice == 'paper' && computerChoice == 'rock' ||
               playerChoice == 'scissors' && computerChoice == 'paper' ||
               playerChoice == 'rock' && computerChoice == 'scissors'
    ) {
        resultText.textContent = `PLAYER WON! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
    }

    scoreText.textContent = `Player: ${playerScore}; Computer: ${computerScore}`;

    checkScore();
}

// Check score

function checkScore() {

    while (playerScore != 5 && computerScore != 5) {
        quit
    }

    if (playerScore === 5) {
        finalResult.textContent = 'CONGRATULATION! PLAYER WON';
    } else if (computerScore === 5) {
        finalResult.textContent = 'OH NO! COMPUTER WON';
    } else {
        finalResult.textContent = "IT'S A TIE!";
    }

    // Set  scores down to 0

    playerScore = 0;
    computerScore = 0;
    scoreText.textContent = '';
}
