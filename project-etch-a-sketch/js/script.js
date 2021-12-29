//  1. Create the divs using JavaScript. Don’t try making them by hand    with copy and pasting in your html file!
// 2. It’s best to put your grid squares inside another “container” div (which can go directly in your html).
// 3. There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:  1. float/clear
//     2. inline-block
//     3. flexbox
//     4. CSS Grid
// 4. Be careful with borders and margins, as they can adjust the size of the squares!
// 5. “OMG, why isn’t my grid being created???”
//  1. Did you link your CSS stylesheet?
//  2. Open your browser’s developer tools.
//  3. Check if there are any errors in the JavaScript console.
//  4. Check your “elements” pane to see if the elements have
//     actually shown up but are somehow hidden.
//  5. Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

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
