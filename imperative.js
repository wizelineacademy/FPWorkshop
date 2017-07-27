const users = require('./data/users');

const getAllCities = (users) => {
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    const city = users[i].address.city;
    if (!cities.includes(city)) {
      cities.push(city);
    }
  }

  return cities;
};

const getWebsitesWithOrg = (users) => {
  let filtered = [];
  for (let i = 0; i < users.length; i++) {
    const website = users[i].website;
    if (website.includes('org')) {
      filtered.push(website);
    }
  }
};

const getFinalAddresses = (users) => {
  const usersAddresses = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const { street, suite, city, zipCode } = user.address;
    const newAddress = [street, suite, city, zipCode].join(' ');
    usersAddresses.push(newAddress);
  }
  return usersAddresses;
};

//console.log(getWebsitesWithOrg(users));
//console.log(getFinalAddresses(users));
console.log(getAllCities(users));
