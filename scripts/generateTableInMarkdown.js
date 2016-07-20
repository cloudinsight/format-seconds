var data = require('../test/dataset.json');

console.log('|  input |  expected  |');
console.log('|:-------|:-----------|');

data.forEach(function (item) {
  console.log('| %s |  %s  |', item[0], item[1])
});
