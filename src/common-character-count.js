const { NotImplementedError } = require('../extensions/index.js');


function getCommonCharacterCount(s1, s2) {
  const s1Chars = s1.split('');
  const s2Chars = s2.split('');
  let commonChars = 0;

  for (let i = 0; i < s1Chars.length; i++) {
    const index = s2Chars.indexOf(s1Chars[i]);

    if (index !== -1) {//eсли индекс не равен -1, то символ присутствует в обеих строках
      commonChars++;
      s2Chars.splice(index, 1);
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
