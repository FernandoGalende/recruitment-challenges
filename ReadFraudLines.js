const fs = require("fs");
const normalize = require("./Normalize/Normailze");

let readFraudLines = filePath => {
  let orders = [];
  let fileContent;
  const keys = [
    'orderId',
    'dealId',
    'email',
    'street',
    'city',
    'state',
    'zipCode',
    'creditCard'
  ];

  try {
    fileContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.log(err);
  }

  class Order {
    constructor(items) {
      for (let i = 0; i < keys.length; i++) {
        this[keys[i]] = items[i];
      }
    }

    format() {
      for (let i = 0; i <= keys.indexOf("dealId"); i++) {
        this[keys[i]] = Number(this[keys[i]]);
      }
      for (let j = keys.indexOf("email"); j <= keys.indexOf("state"); j++) {
        this[keys[j]] = this[keys[j]].toLowerCase();
      }
      return this;
    }
  }

  let lines = fileContent.split("\n");
  for (let line of lines) {
    let items = line.split(",");
    let myOrder = new Order(items).format();
    myOrder.email,
      myOrder.street,
      (myOrder.state = normalize.normalize(
        myOrder.email,
        myOrder.street,
        myOrder.state
      ));
    orders.push(myOrder);
  }

  return orders;
};

module.exports = { readFraudLines };
