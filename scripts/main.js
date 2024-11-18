
// GLOBAL VARIABLES

let playerScore = 0;
let computerScore = 0;

console.log(startGame());

// Getting random numbers that are required for computer to make a choice

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

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
    while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        playerChoice = prompt("Please enter a valid choice: Rock, Paper or Scissors ").toLowerCase();
    } 
    return playerChoice;
}

function playRound() {

    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    console.log(playerChoice);
    console.log(computerChoice);
    
    if (playerChoice === computerChoice) {
        console.log("TIE!");
    } else if (playerChoice == 'rock' && computerChoice == 'paper' || 
               playerChoice == 'paper' && computerChoice == 'scissors' ||
               playerChoice == 'scissors' && computerChoice == 'rock'
    ) {
        console.log(`COMPUTER WON! ${computerChoice} beats ${playerChoice}`)
        computerScore += 1;
    } else if (playerChoice == 'paper' && computerChoice == 'rock' ||
               playerChoice == 'scissors' && computerChoice == 'paper' ||
               playerChoice == 'rock' && computerChoice == 'scissors'
    ) {
        console.log(`PLAYER WON! ${playerChoice} beats ${computerChoice}`);
        playerScore += 1;
    } 
}

function startGame() {

    let gamesCount = 0;

    while (gamesCount < 5) {
        console.log(playRound());
        gamesCount += 1;
        console.log(`The score is: Computer - ${computerScore} Player - ${playerScore}`);
    }

    if (playerScore > computerScore) {
        console.log('CONGRATULATION! PLAYER WON');
    } else if (playerScore < computerScore) {
        console.log('OH NO! COMPUTER WON');
    } else {
        console.log("IT'S A TIE!");
    }

    // Set  scores down to 0

    playerScore = 0;
    computerScore = 0;

    // Start game over

    console.log(playAgain());
}

function playAgain() {
    let playerAnswer = prompt("Do you want to play again? Yes or No").toLowerCase();
    
    while (playerAnswer != 'yes' && playerAnswer != 'no') {
        playerAnswer = prompt("Do you want to play again? Yes or No").toLowerCase();
    }

    if (playerAnswer =='yes') {
        startGame();
    } else if (playerAnswer='no') {
        console.log("Bye!");
    }
}
