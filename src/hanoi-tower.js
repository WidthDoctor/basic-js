const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disc,speed) {
  const turns = Math.pow(2, disc) - 1;
  const seconds = Math.floor(turns / (speed / 3600));//3600 секунды в часе короч
  return {turns, seconds}
}

module.exports = {
  calculateHanoi
};
