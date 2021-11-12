function computerPlay() {
    const computerThrow = Math.floor((Math.random() * 3) + 1);

    if (computerThrow == 1) {
        return 'Rock';
    } else if (computerThrow == 2) {
        return 'Paper';
    } else if (computerThrow == 3) {
        return 'Scissors';
    } else { return 'Error: Computer doesn\'t wanna play anymore'; }
}

let playerSelection = function () {
    let choice = prompt('Choose Rock, Paper or Scissors');
    let output = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    if (output == 'Rock') {
        return 'Rock';
    } else if (output == 'Paper') {
        return 'Paper';
    } else if (output == 'Scissors') {
        return 'Scissors';
    } else { return 'Error: Computer doesn\'t wanna play anymore'; }
    return output;
}


let computerSelection = computerPlay();

