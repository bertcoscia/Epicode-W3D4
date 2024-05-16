const board = [];

const createBoard = () => {
  const boardContainer = document.getElementById("board-container");

  for (let i = 0; i < 76; i++) {
    board.push([]);

    //creo la cella
    const numberCell = document.createElement("div");
    numberCell.classList.add("cell");

    //creo un h3, numero della cella
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    //appendo h3 alla cella
    numberCell.appendChild(cellValue);

    boardContainer.appendChild(numberCell);
  } // chiudo il for
};

// const drawnNumbers = [];

// genero numero random al click del button
const button = document.getElementById("draw-number"); // creo riferimento al btn

//aggiungo eventlistener
button.addEventListener("click", (event) => {
  const randomNumber = Math.floor(Math.random() * 76) + 1; //genero numero random compreso tra 1 e 76
  /* drawnNumbers.push(randomNumber);
  console.log(drawnNumbers); */

  const cells = document.querySelectorAll(".cell");

  cells[randomNumber - 1].classList.add("drawn");
});

window.addEventListener("DOMContentLoaded", (event) => {
  createBoard();
});
