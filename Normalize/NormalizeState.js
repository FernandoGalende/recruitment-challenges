const dictionary = require("./dictionary");

const normalizeState = (state, street) => {
  for (let i = 0; i < dictionary.length; i++) {
    state = street.replace(dictionary[i][0], dictionary[i][1]);
  }
  return state;
};

module.exports = { normalizeState };
