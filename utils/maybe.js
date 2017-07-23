const curry = require('./curry');

const isNil = (x) => x === null || x === undefined;

function Maybe(value) {
  return !isNil(value) ? new Just(value) : new Nothing();
}

Maybe.of = (value) => new Just(value);

const withDefault = (defaultValue, maybeValue) =>
  maybeValue.isJust ? maybeValue.value : defaultValue;

class Just {
  constructor(value) {
    this._value = value;
  }

  map(f) {
    return Maybe.of(f(this._value));
  }

  get isJust() {
    return true;
  }

  get isNothing() {
    return false;
  }

  get value() {
    return this._value;
  }
}

class Nothing {
  map() {
    return this;
  }

  get value() {
    throw new Error("Can't access empty value");
  }

  get isJust() {
    return false;
  }

  get isNothing() {
    return true;
  }
}

module.exports = { Maybe, withDefault: curry(withDefault) };
