const users = require('./data/users');
const {
  compose,
  map,
  filter,
  logger,
  prop,
  unique,
  maybe,
} = require('./utils');

const init = () => {
  console.log(users);
};

const getWebsitesWithOrg = (users) => {
  return compose(
    map(prop('website')),
    filter((user) => user.website.includes('.org'))
  )(users);
};

const getAllCities = (users) => {
  const getCity = compose(prop('city'), prop('address'));
  return compose(unique, map(getCity))(users);
};

const getUserNames = (users) => {
  const safeUsername = (user) => maybe.Maybe(user.username);
  return map(compose(maybe.withDefault('No username'), safeUsername), users);
};

// Here we go
init();

compose(logger, getWebsitesWithOrg)(users);
compose(logger, getAllCities)(users);
compose(logger, getUserNames)(users);
