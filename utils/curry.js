const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...x) => curried(...args.concat(x));
  };
};

module.exports = curry;
