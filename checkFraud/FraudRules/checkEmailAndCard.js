let checkEmailAndCard = (current, order) => {
  if ( current.dealId === order.dealId && current.email === order.email && current.creditCard !== order.creditCard ) {
    return true;
  }
  return false;
};

module.exports = { checkEmailAndCard };
