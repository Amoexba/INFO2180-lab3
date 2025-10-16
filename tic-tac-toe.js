document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  let currentPlayer = "X";
  const gameState = Array(9).fill(null);

  squares.forEach(function (square, index) {
    square.classList.add("square");

    square.addEventListener("click", function () {
      if (!gameState[index]) {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      }
    });
  });
});