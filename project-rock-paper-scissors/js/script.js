function computerPlay() {
    const computerThrow = Math.floor((Math.random() * 3) + 1);

    if (computerThrow == 1) {
        return 'Rock';
    } else if (computerThrow == 2) {
        return 'Paper';
    } else if (computerThrow == 3) {
        return 'Scissors';
    } else {
        return 'Error: Computer doesn\'t wanna play anymore';
    }
}

let playerPlay = function () {
    let choice = prompt('Choose Rock, Paper or Scissors');
    let output = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    if (output == 'Rock') {
        return 'Rock';
    } else if (output == 'Paper') {
        return 'Paper';
    } else if (output == 'Scissors') {
        return 'Scissors';
    } else {
        return 'Error: Player made mistake';
    }
    
}

// scissors beat paper, paper beats rock, rock beats scissors,  

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    // console.log(computerSelection);
    playerSelection = playerPlay();
    // console.log(playerSelection);

    if (computerSelection === playerSelection) {
        return 'Draw!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose! Scissors beat Rock';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You lose! Rock beats Scissors';
    } else {
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }
}

console.log(playRound());