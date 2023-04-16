const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  return matrix.map((row, i) => row.map((cell, j) => {
    let count = 0;
    for (let x = i - 1; x <= i + 1; x++) {
      for (let y = j - 1; y <= j + 1; y++) {
        if (matrix[x] && matrix[x][y]) count++;
      }
    }
    return count - cell;
  }));
}

module.exports = {
  minesweeper
};
