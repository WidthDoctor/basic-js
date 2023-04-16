const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
  const digits = String(n).split('');
  return Math.max(...digits.map((_, i) => Number(digits.filter((_, j) => i !== j).join(''))));
}

module.exports = {
  deleteDigit
};
