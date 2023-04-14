const {listNode} = require('../extensions/index.js');

function countCats(matrix) {
  return matrix.flat().filter((item) => item === '^^').length; //зачем искать по каждому массиву отдельно если можно найти в одном ?)
}

module.exports = {
  countCats
};
