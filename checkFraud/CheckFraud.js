const One = require('./FraudRules/ruleOne')
const Two = require('./FraudRules/ruleTwo')

let checkFraud = orders => {
  let arrFraudList = [];

  for (let i = 0; i < orders.length; i++) {
    current = orders[i];
    for (let j = i + 1; j < orders.length; j++) {
      if (One.ruleOne(current, orders[j]) && Two.ruleTwo(current, orders[j])) {
        arrFraudList.push({ isFraudulent: true, orderId: orders[j].orderId })
      }       
    }
  }
  return arrFraudList;
};

module.exports = { checkFraud };
