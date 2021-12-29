function createBoard(number) {
  for (i = 1; i <= number; i++) {
    const board = document.querySelector("#board");
    const box = document.createElement("div");
    box.classList.add(`"boxi${i}"`);
    board.appendChild(box);

    for (j = 1; j <= number; j++) {
      const boardDiv = document.getElementById("board").lastChild;
      const box2 = document.createElement("div");
      box2.classList.add(`"boxj${j}"`);
      box2.classList.add("box");
      boardDiv.appendChild(box2);
    }
  }
}

createBoard(100);
const box = document.querySelectorAll(".box");

box.forEach(
  addEventListener("mouseover", (e) => {
    console.log(e.relatedTarget.style.backgroundColor);
    e.relatedTarget.style.backgroundColor = "black";
  })
);
