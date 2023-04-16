const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += String(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}


module.exports = {
  repeater
};
