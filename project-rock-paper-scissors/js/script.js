let scorePlayer = 0;
let scoreComputer = 0;

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
    console.log(computerSelection);
    playerSelection = playerPlay();
    console.log(playerSelection);

    if (computerSelection === playerSelection) {
        return 'Draw!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        scoreComputer += 1;
        return 'You lose! Scissors beat Rock';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        scoreComputer += 1;
        return 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        scoreComputer += 1;
        return 'You lose! Rock beats Scissors';
    } else {
        scorePlayer += 1;
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

}

// TODO Write a NEW function called game(). Use the previous function inside of this one to play a 5 ROUND GAME that KEEPS SCORE and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// TODO? Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.

// TODO write function to keep score and keep track of winning side
function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log(`${scorePlayer}:${scoreComputer}`);
        console.log('');
    }
    if (scorePlayer > scoreComputer) {
        console.log('Player wins');
    } else if (scoreComputer > scorePlayer) {
        console.log('Computer wins');
    } else {
        console.log('It\'s draw!');
    }
}
game();