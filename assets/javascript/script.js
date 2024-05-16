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

createBoard();
console.log(board.innerText);
