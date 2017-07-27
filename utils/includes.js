const curry = require('./curry');

const includes = (term, whereToSearch) => whereToSearch.includes(term);

module.exports = curry(includes);
