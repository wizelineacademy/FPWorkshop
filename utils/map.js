const curry = require('./curry');

const map = (f, x) => x.map(f);

module.exports = curry(map);
