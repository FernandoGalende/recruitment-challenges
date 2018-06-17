const dictionary = require("./dictionary");

const normalize = (email, street, state) => {
  email = normalizeEmail(email);
  street = normalizeStreet(street);
  state = normalizeState(state, street);
  return email, street, state;
};

const normalizeEmail = email => {
  if (email.indexOf("+") > 0) {
    email =
      email.substring(0, email.indexOf("+")) +
      email.substring(email.indexOf("@"), email.length);
  }
  return email.replace(/[\.]/i, "");
};

const normalizeStreet = street => {
  return street.replace("st.", "street").replace("rd.", "road");
};

const normalizeState = (state, street) => {
  for (let i = 0; i < dictionary.length; i++) {
    state = street.replace(dictionary[i][0], dictionary[i][1]);
  }
  return state;
};

module.exports = { normalize };
