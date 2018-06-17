const readFraudLines = require('./ReadFraudLines')
const checkFraud = require('./checkFraud/CheckFraud')

const Check = filePath => {
  const orders = readFraudLines.readFraudLines(filePath)  
  return checkFraud.checkFraud(orders)
}

module.exports = { Check }
