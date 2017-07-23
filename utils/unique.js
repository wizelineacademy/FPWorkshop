const compose = require('./compose');

const unique = (array) =>
  compose((x) => Array.from(x), (x) => new Set(x))(array);

module.exports = unique;
