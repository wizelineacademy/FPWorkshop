// can receive as many params as the initial function
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

module.exports = { compose };
