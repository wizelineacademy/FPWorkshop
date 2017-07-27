const curry = require('./curry');

const props = (keys, obj) => {
  const newProps = [];
  keys.forEach((key) => {
    newProps.push(obj[key]);
  });
  return newProps;
};

module.exports = curry(props);
