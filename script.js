const choice = ['Rock', 'Paper', 'Scissors']


function getComputerChoice () {
    computerChoice = choice[Math.floor((Math.random()*choice.length))];
    return computerChoice;
}

console.log(getComputerChoice());