let numbers = [];
let drawnNumbers = [];

const grid = document.getElementById("grid");

// initialize board
function initBoard() {
  numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  drawnNumbers = [];
  grid.innerHTML = "";
  document.getElementById("currentNumber").textContent = "--";
  document.getElementById("completedMsg").style.display = "none";

  numbers.forEach(num => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell-" + num;
    cell.textContent = num;
    grid.appendChild(cell);
  });
}

function generateNumber() {
  if (numbers.length === 0) {
    document.getElementById("completedMsg").style.display = "block";
    return;
  }

  const index = Math.floor(Math.random() * numbers.length);
  const number = numbers.splice(index, 1)[0];
  drawnNumbers.push(number);

  document.getElementById("currentNumber").textContent = number;
  document.getElementById("cell-" + number).classList.add("marked");

  if (numbers.length === 0) {
    document.getElementById("completedMsg").style.display = "block";
  }
}

function resetGame() {
  initBoard();
}

// start first board
initBoard();
