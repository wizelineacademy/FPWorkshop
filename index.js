const users = require('./data/users');
const {
  compose,
  map,
  filter,
  logger,
  includes,
  prop,
  props,
  unique,
  maybe,
  filterMap,
  identity,
} = require('./utils');

const { Maybe, withDefault } = maybe;
const safeUsername = (user) => Maybe(user.username);
const getCity = compose(prop('city'), prop('address'));
const join = (char) => (array) => array.join(char);

const init = () => {
  console.log(users);
};

//const getWebsitesWithOrg = compose(
  //map(prop('website')),
  //filter((user) => user.website.includes('.org'))
//);

const getWebsiteFromUser = prop('website');
const getWebsitesWithOrg = filterMap(compose(includes('org'), getWebsiteFromUser), getWebsiteFromUser);

const getAllCities = compose(unique, map(getCity));
//const getUserNames = map(compose(withDefault('No username'), safeUsername));

const getFinalAddresses = map(
  compose(
    join(' '),
    props(['street', 'suite', 'city', 'zipCode']),
    prop('address'))
);

// Here we go
//init();

compose(logger, getWebsitesWithOrg)(users);
//compose(logger, getAllCities)(users);
//compose(logger, getUserNames)(users);
//compose(logger, getFinalAddresses)(users);
