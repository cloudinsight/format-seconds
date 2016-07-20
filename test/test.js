var dataset = require('./dataset.json');
var convert = require('../');
var equal = require('assert').equal;

describe('convert', function () {
  dataset.forEach(function (item) {
    var actual = item[0];
    var expected = item[1];
    it(actual + ' to ' + expected, function () {
      equal(convert(actual), expected)
    });
  });
});
