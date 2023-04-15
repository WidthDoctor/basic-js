const { NodeList } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .filter((elem) => typeof elem === "string")//вышвыриваем не строки
    .map((elem) => elem.trim()[0].toUpperCase())//в первую букву
    .sort()
    .join("");
}

module.exports = {
  createDreamTeam
};
