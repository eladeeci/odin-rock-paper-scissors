const choice = ['rock', 'paper', 'scissors']
let win = 0;
let loss = 0;
let tie = 0;


playGame();
if (win>loss) {
    finalResult = 'You won!';
} else if (win<loss) {
    finalResult = 'You lost!';
} else if (win===loss) {
    finalResult = 'It\'s a tie!';
}
console.log(`Game over! ${finalResult}`)
console.log(`Win: ${win}`);
console.log(`Loss: ${loss}`);
console.log(`Tie: ${tie}`);


/* FUNCTIONS */

function playGame () {
    for ( roundCount=1; roundCount <= 5; roundCount++) {
        playRound();
        if (result === 'playerWin') {
            win += 1;
        } else if (result === 'playerLose') {
            loss += 1;
        } else {
            tie += 1;
        }
    }
}

function getPlayerChoice () {
    playerChoice = prompt('Choose a hand to play: ','Rock, paper, or scissors.')
    return playerChoice;
}

function getComputerChoice () {
    computerChoice = choice[Math.floor((Math.random()*choice.length))];
    return computerChoice;
}

function playRound () {

    /* console.log(playerSelection); */

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();

    switch (playerSelection) {

        case 'rock':
            if (computerSelection === 'rock') {
                console.log("It's a tie! You both chose rock.");
                return result = 'tie';
                break;
            } else if (computerSelection === 'paper') {
                console.log("You lose! Paper beats rock.");
                return result = 'playerLose';
                break;
            } else if (computerSelection === 'scissors') {
                console.log("You win! Rock beats scissors.")
                return result = 'playerWin';
                break;
            } else {
                console.log("Invalid player input.");
                break;
            }
        
        case 'paper':
            if (computerSelection === 'rock') {
                console.log("You win! Paper beats rock.");
                return result = 'playerWin';
                break;
            } else if (computerSelection === 'paper') {
                console.log("It's a tie! You both chose paper.");
                return result = 'tie';
                break;
            } else if (computerSelection === 'scissors') {
                console.log("You lose! Scissors beat paper.");
                return result = 'playerLose';
                break;
            } else {
                console.log("Invalid player input.");
                break;
            }

        case 'scissors':
            if (computerSelection === 'rock') {
                console.log("You lose! Rock beats scissors.");
                return result = 'playerLose';
                break;
            } else if (computerSelection === 'paper') {
                console.log("You win! Scissors beat paper.");
                return result = 'playerWin';
                break;
            } else if (computerSelection === 'scissors') {
                console.log("It's a tie! You both chose scissors.")
                return result = 'tie';
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

