const normalizeEmail = require("./NomalizeEmail");
const normalizeStreet = require("./NormalizeStreet");
const normalizeState = require("./NormalizeState");


const normalize = (email, street, state) => {
  email = normalizeEmail.normalizeEmail(email);
  street = normalizeStreet.normalizeStreet(street);
  state = normalizeState.normalizeState(state, street);
  return email, street, state;
};

module.exports = { normalize };
