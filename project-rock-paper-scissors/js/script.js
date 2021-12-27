let scorePlayer = 0;
let scoreComputer = 0;
// let scoreOutputText = `${scorePlayer}:${scoreComputer}`;

const scoreOutput = document.createElement("p");
const roundOutput = document.createElement("p");
const selectionChoice = document.createElement("p");

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

function printScore() {
  document
    .querySelector(".score")
    .appendChild(
      scoreOutput
    ).textContent = `Player: ${scorePlayer} Computer: ${scoreComputer}`;

  function endgame() {
    if (scorePlayer === 5) {
      document.querySelector(".round").appendChild(roundOutput).textContent =
        "You Win! Play again!";
    }
    if (scoreComputer === 5) {
      document.querySelector(".round").appendChild(roundOutput).textContent =
        "You Lose! Play again!";
    }
    scorePlayer = 0;
    scoreComputer = 0;

    return;
  }
  if (scoreComputer === 5 || scorePlayer === 5) endgame();
}

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
  computerSelection = computerPlay();

  document
    .querySelector(".choice")
    .appendChild(
      selectionChoice
    ).textContent = `${playerSelection} against ${computerSelection}`; //cannot use function here, because return terminates whole playRound function. maybe refactoring?

  if (computerSelection === playerSelection) {
    document.querySelector(".round").appendChild(roundOutput).textContent =
      "Draw";
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    scoreComputer += 1;
    document.querySelector(".round").appendChild(roundOutput).textContent =
      "You lose! Scissors beat Rock";
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    scoreComputer += 1;
    document.querySelector(".round").appendChild(roundOutput).textContent =
      "You lose! Paper beats Rock";
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    scoreComputer += 1;
    document.querySelector(".round").appendChild(roundOutput).textContent =
      "You lose! Rock beats Scissors";
  } else {
    scorePlayer += 1;
    document
      .querySelector(".round")
      .appendChild(
        roundOutput
      ).textContent = `You win! ${playerSelection} beats ${computerSelection} `;
  }
}

function endGame() {}
