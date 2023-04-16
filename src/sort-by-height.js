const { NotImplementedError } = require('../extensions/index.js');


function sortByHeight(arr) {
  const sortedArr = arr.filter(x => x !== -1).sort((a, b) => a - b);
  return arr.map(x => x !== -1 ? sortedArr.shift() : -1);
}

module.exports = {
  sortByHeight
};
