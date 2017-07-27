const curry = require('./curry');

const reduce = curry((fn, initializer, list) => list.reduce(fn, initializer));

module.exports = reduce;
