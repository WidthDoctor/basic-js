const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let currentDepth = this.calculateDepth(item, depth + 1);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
