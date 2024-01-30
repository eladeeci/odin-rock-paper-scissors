const choice = ['rock', 'paper', 'scissors']

function getPlayerChoice () {
    playerChoice = prompt('Choose a hand to play: ','Rock, paper, or scissors.')
    return playerChoice;
}

function getComputerChoice () {
    computerChoice = choice[Math.floor((Math.random()*choice.length))];
    return computerChoice;
}


