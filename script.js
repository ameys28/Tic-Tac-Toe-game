let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new");
let turnO = true;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const disable = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}
const enable = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const resetGame = () => {
  turnO = true;
  enable();
  container.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    check();
  })
})
const showWinner = (winner) => {
  msg.innerText = `Congratulations!! Winner is ${winner}`;
  container.classList.remove("hide");
  disable();
}
const check = () => {
  for(let pattern of win) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != ""){
      if(pos1value === pos2value && pos2value === pos3value) {
       showWinner(pos1value);
      }
    }
  }
}
newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)