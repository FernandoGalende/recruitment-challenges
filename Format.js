const format = order => {
  order.orderId = Number(order.orderId);
  order.dealId = Number(order.dealId);
  order.email = order.email.toLowerCase();
  order.street = order.street.toLowerCase();
  order.city = order.city.toLowerCase();
  order.state = order.state.toLowerCase();
  order.zipCode = order.zipCode.toLowerCase();

  return order;
};

module.exports = { format };
