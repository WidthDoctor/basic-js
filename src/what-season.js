const { NodeList } = require('../extensions/index.js');

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date.getMonth === 'undefined'||Object.keys(date).length > 0||!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  const month = date.getMonth();
  return (month === 11 || month === 0 || month === 1) ? 'winter' :
(month === 2 || month === 3 || month === 4) ? 'spring' :
(month === 5 || month === 6 || month === 7) ? 'summer' :
'autumn';
}

module.exports = {
  getSeason
};
