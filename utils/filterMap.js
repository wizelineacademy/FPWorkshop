const curry = require('./curry');

const filterMap = (filterCondition, mapFunction, array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (filterCondition(current)) {
      newArray.push(mapFunction(current));
    }
  }
  return newArray;
};

module.exports = curry(filterMap);
