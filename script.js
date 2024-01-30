const choice = ['rock', 'paper', 'scissors']

playGame();

/* FUNCTIONS */

function playGame () {
    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function getPlayerChoice () {
    playerChoice = prompt('Choose a hand to play: ','Rock, paper, or scissors.')
    return playerChoice;
}

function getComputerChoice () {
    computerChoice = choice[Math.floor((Math.random()*choice.length))];
    return computerChoice;
}

function playRound (playerSelection,computerSelection) {

    /* console.log(playerSelection); */

    switch (playerSelection) {

        case 'rock':
            if (computerSelection === 'rock') {
                console.log("It's a tie! You both chose rock.");
                break;
            } else if (computerSelection === 'paper') {
                console.log("You lose! Paper beats rock.");
                break;
            } else if (computerSelection === 'scissors') {
                console.log("You win! Rock beats scissors.")
                break;
            } else {
                console.log("Invalid player input.");
                break;
            }
        
        case 'paper':
            if (computerSelection === 'rock') {
                console.log("You win! Paper beats rock.");
                break;
            } else if (computerSelection === 'paper') {
                console.log("It's a tie! You both chose paper.");
                break;
            } else if (computerSelection === 'scissors') {
                console.log("You lose! Scissors beat paper.");
                break;
            } else {
                console.log("Invalid player input.");
                break;
            }

        case 'scissors':
            if (computerSelection === 'rock') {
                console.log("You lose! Rock beats scissors.");
                break;
            } else if (computerSelection === 'paper') {
                console.log("You win! Scissors beat paper.");
                break;
            } else if (computerSelection === 'scissors') {
                console.log("It's a tie! You both chose scissors.")
                break;
            } else {
                console.log("Invalid player input.");
                break;
            }
        
        default:
            console.log("Invalid player input. Please only choose among rock, paper, or scissors.");
            break;
          
    }

}

