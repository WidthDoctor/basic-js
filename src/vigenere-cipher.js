const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < messageUpperCase.length; i++) {
      const messageCharCode = messageUpperCase.charCodeAt(i);

      if (messageCharCode < 65 || messageCharCode > 90) {
        result += messageUpperCase[i];
        continue;
      }

      const keyCharCode = keyUpperCase.charCodeAt(j % keyUpperCase.length);
      const encryptedCharCode = ((messageCharCode + keyCharCode - 130) % 26) + 65;

      result += String.fromCharCode(encryptedCharCode);

      j++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < encryptedMessageUpperCase.length; i++) {
      const encryptedCharCode = encryptedMessageUpperCase.charCodeAt(i);

      if (encryptedCharCode < 65 || encryptedCharCode > 90) {
        result += encryptedMessageUpperCase[i];
        continue;
      }

      const keyCharCode = keyUpperCase.charCodeAt(j % keyUpperCase.length);
      const decryptedCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;

      result += String.fromCharCode(decryptedCharCode);

      j++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
