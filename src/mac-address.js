const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(String) {
  const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macAddressRegex.test(String);
}
module.exports = {
  isMAC48Address
};
