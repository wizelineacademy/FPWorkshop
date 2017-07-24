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

const { Maybe, withDefault } = maybe;
const safeUsername = (user) => Maybe(user.username);
const getCity = compose(prop('city'), prop('address'));

const init = () => {
  console.log(users);
};

const getWebsitesWithOrg = compose(
  map(prop('website')),
  filter((user) => user.website.includes('.org'))
);

const getAllCities = compose(unique, map(getCity));
const getUserNames = map(compose(withDefault('No username'), safeUsername));

// Here we go
init();

compose(logger, getWebsitesWithOrg)(users);
compose(logger, getAllCities)(users);
compose(logger, getUserNames)(users);
