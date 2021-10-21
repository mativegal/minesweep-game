export default (row, col, bombs) => {
  /* if (bombs > r*c) {
    bombs = (r*c)/3
  } */

  let board = [];
  let mineLocation = [];

  // Create Empty Grid
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false
      });
    }
    board.push(subCol);
  }

  // Place Bombs
  let bombCount = 0;
  while (bombCount < bombs) {
    let x = randomNum(0, row - 1);
    let y = randomNum(0, col - 1);

    if(board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      bombCount++;
    }
  }

  return {board, mineLocation};
};

const randomNum = (min = 0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
