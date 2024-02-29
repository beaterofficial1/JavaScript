const boxes = document.querySelectorAll(".box");
const turnof = document.querySelector(".turnof");
const winnerIs = document.querySelector(".winner");
const resetBtn = document.querySelector("#reset");
const field = document.querySelector(".message-field");
const drawField = document.querySelector(".drawField");
const newgame = document.querySelector(".newgame");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnO) {
      turnO = false;
      box.innerHTML = "O";
      turnof.innerText = "X";
      box.style.color = "black";
      turnof.style.color = "red";
    } else {
      turnO = true;
      box.innerHTML += "X";
      turnof.innerText = "O";
      box.style.color = "red";
    }

    box.disabled = true;
    checkWinner();
  });
});

function disableBtn() {
  boxes.forEach((box) => {
    box.setAttribute("disabled", "");
  });
}

function hideWinner() {
  turnof.innerText = "O";
  turnof.style.color = "#fff";
  field.classList.add("none");
  console.log(winnerIs);
}

function showWinner(winner) {
  winnerIs.innerText = winner;
  field.classList.remove("none");
}

function newGame() {
  hideWinner();
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.removeAttribute("disabled");
    resetBtn.classList.remove("none");
  });
}

function reset() {
  turnO = true;
  hideWinner();
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.removeAttribute("disabled");
  });
}

function checkWinner() {
  for (const pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner is" + pos1Val);
        disableBtn();
        showWinner(pos1Val);
        resetBtn.classList.add("none");
      }
    }
  }
}

resetBtn.addEventListener("click", reset);
newgame.addEventListener("click", newGame);
