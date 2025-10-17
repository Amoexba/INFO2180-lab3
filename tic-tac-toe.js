document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const newGameButton = document.querySelector("#game .controls .btn");
  const status = document.getElementById("status");
  let currentPlayer = "X";
  const gameState = Array(9).fill(null);

  const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
  ];

  function checkWinner() {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
        status.classList.add("you-won");
        return true;
      }
    }
    return false;
  }

  squares.forEach(function (square, index) {
    square.classList.add("square");

    square.addEventListener("click", function () {
      if (!gameState[index] && !status.classList.contains("you-won")) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        if (checkWinner()) {
          return; 
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    square.addEventListener("mouseover", function () {
      if (!gameState[index] && !status.classList.contains("you-won")) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseout", function () {
      square.classList.remove("hover");
    });
  });

  newGameButton.addEventListener("click", function () {
    squares.forEach(function (square, index) {
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
      gameState[index] = null;
    });

    currentPlayer = "X";
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
  });
});