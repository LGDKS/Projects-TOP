//Sketch Board
function createBoard(number) {
  for (i = 1; i <= number; i++) {
    const board = document.querySelector("#board");
    const box = document.createElement("div");
    box.classList.add(`"boxx${i}"`);
    board.appendChild(box);

    for (j = 1; j <= number; j++) {
      const boardDiv = document.getElementById("board").lastChild;
      const box2 = document.createElement("div");
      box2.classList.add(`"boxy${j}"`);
      box2.classList.add("box");
      boardDiv.appendChild(box2);
    }
  }
}
createBoard(10);
addListener();

//REMOVE
function removeBoard() {
  const board = document.querySelector("#board");
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

//POPUP creator
function popUp() {
  removeBoard();
  let number = prompt("enter number(less than 100): ");
  if (number <= 100) createBoard(number);
  addListener();
}
// ADD Listener'
function addListener() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = randomColorGenerator();
    })
  );
}

//RESET button that reloads site
const resetButton = document.querySelector(".reset-button");
function locationReload() {
  location.reload();
}
// resetButton.addEventListener("click", locationReload);

resetButton.addEventListener("click", (e) => {
  popUp();
  const boxes = document.querySelectorAll(".box");
  const boardBackgroundColor = randomColorGenerator();

  // boxes.forEach((box) => box.classList.add("boxred"));
  boxes.forEach((box) => (box.style.backgroundColor = boardBackgroundColor));
});

//TODO background image resize

function randomColorGenerator() {
  let redColor = Math.round(Math.random() * 255);
  let greenColor = Math.round(Math.random() * 255);
  let blueColor = Math.round(Math.random() * 255);
  let color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  return color;
}
