const ruleOne = require('./FraudRules/checkEmailAndCard')
const ruleTwo = require('./FraudRules/checkStateCityAndCard')

let checkFraud = orders => {
  let arrFraudList = [];

  for (let i = 0; i < orders.length; i++) {
    current = orders[i];
    for (let j = i + 1; j < orders.length; j++) {
      if (ruleOne.checkEmailAndCard(current, orders[j]) && ruleTwo.checkStateCityAndCard(current, orders[j])) {
        arrFraudList.push({ isFraudulent: true, orderId: orders[j].orderId })
      }       
    }
  }
  return arrFraudList;
};

module.exports = { checkFraud };
