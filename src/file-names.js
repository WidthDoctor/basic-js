const { NotImplementedError } = require('../extensions/index.js');


function renameFiles(names) {
  const nameCount = {};
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (nameCount[name] === undefined) {
      nameCount[name] = 0;
      result.push(name);
    } else {
      nameCount[name]++;
      const newName = `${name}(${nameCount[name]})`;
      nameCount[newName] = 0;
      result.push(newName);
    }
  }

  return result;
}
module.exports = {
  renameFiles
};
