const curry = require('./curry');

const filter = (f, x) => x.filter(f);

module.exports = curry(filter);
