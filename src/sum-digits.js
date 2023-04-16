const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  const sum = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum < 10 ? sum : getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
