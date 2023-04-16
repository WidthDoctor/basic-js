const { NotImplementedError } = require('../extensions/index.js');


function getEmailDomain(email) {
  const index = email.lastIndexOf('@');
  return email.substring(index + 1);
}

module.exports = {
  getEmailDomain
};
