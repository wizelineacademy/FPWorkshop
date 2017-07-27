const curry = require('./curry');

const prop = (key, obj) => obj[key];

module.exports = curry(prop);
