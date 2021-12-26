let scorePlayer = 0;
let scoreComputer = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("Rock");
  printScore();
});
paper.addEventListener("click", () => {
  playRound("Paper");
  printScore();
});
scissors.addEventListener("click", () => {
  playRound("Scissors");
  printScore();
});

function computerPlay() {
  const computerThrow = Math.floor(Math.random() * 3 + 1);

  if (computerThrow == 1) {
    return "Rock";
  } else if (computerThrow == 2) {
    return "Paper";
  } else if (computerThrow == 3) {
    return "Scissors";
  } else {
    return "Error: Computer doesn't wanna play anymore";
  }
}

// scissors beat paper, paper beats rock, rock beats scissors,

function playRound(playerSelection) {
  console.log("player: " + playerSelection);

  computerSelection = computerPlay();
  console.log("pc: " + computerSelection);

  if (computerSelection === playerSelection) {
    return "Draw!";
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    scoreComputer += 1;
    return "You lose! Scissors beat Rock";
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    scoreComputer += 1;
    return "You lose! Paper beats Rock";
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    scoreComputer += 1;
    return "You lose! Rock beats Scissors";
  } else {
    scorePlayer += 1;
    return `You win! ${playerSelection} beats ${computerSelection} `;
  }
}
function printScore() {
  console.log(`${scorePlayer}:${scoreComputer}`);
  console.log("");
  if (scorePlayer > scoreComputer) {
    console.log("Player wins");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer wins");
  } else {
    console.log("It's draw!");
  }
}
