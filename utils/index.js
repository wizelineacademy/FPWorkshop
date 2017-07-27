const compose = require('./compose');
const curry = require('./curry');
const filter = require('./filter');
const filterMap = require('./filterMap');
const head = require('./head');
const length = require('./length');
const logger = require('./logger');
const map = require('./map');
const maybe = require('./maybe');
const includes = require('./includes');
const prop = require('./prop');
const props = require('./props');
const reduce = require('./reduce');
const tail = require('./tail');
const unique = require('./unique');
const identity = require('./identity');

module.exports = {
  curry,
  compose,
  filter,
  filterMap,
  logger,
  head,
  map,
  maybe,
  includes,
  identity,
  prop,
  props,
  tail,
  unique,
  reduce,
  length,
};
