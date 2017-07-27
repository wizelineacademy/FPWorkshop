const converge = (root, funcs, arg) => {
  const newArgs = funcs.map((f) => f(arg));
  return root(...newArgs);
};

module.exports = converge;
