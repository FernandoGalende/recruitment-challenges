const normalizeEmail = require("./NomalizeEmail");
const normalizeStreet = require("./NormalizeStreet");
const normalizeState = require("./NormalizeState");


const normalize = (order) => {
  order.email = normalizeEmail.normalizeEmail(order.email);
  order.street = normalizeStreet.normalizeStreet(order.street);
  order.state = normalizeState.normalizeState(order.state, order.street);
  return order;
};

module.exports = { normalize };
