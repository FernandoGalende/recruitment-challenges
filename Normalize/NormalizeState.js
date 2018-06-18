const citiesDictionary = require("./CitiesDictionary");

const normalizeState = (state, street) => {
  for (let i = 0; i < citiesDictionary.length; i++) {
    state = street.replace(citiesDictionary[i][0], citiesDictionary[i][1]);
  }
  return state;
};

module.exports = { normalizeState };
