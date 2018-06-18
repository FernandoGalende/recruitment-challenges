const fs = require("fs");
const normalize = require("./Normalize/Normailze");
const format = require("./Format");

let readFraudLines = filePath => {
  let orders = [];
  let fileContent;

  class Order {
    constructor(items) {
      this.orderId = items[0];
      this.dealId = items[1];
      this.email = items[2];
      this.street = items[3];
      this.city = items[4];
      this.state = items[5];
      this.zipCode = items[6];
      this.creditCard = items[7];
    }
  }

  try {
    fileContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.log(err);
  }

  let lines = fileContent.split("\n");

  for (let line of lines) {
    let myOrder = new Order(line.split(","));
    
    myOrder = format.format(myOrder);    
    myOrder = normalize.normalize(myOrder);

    orders.push(myOrder);
  }

  return orders;
};

module.exports = { readFraudLines };
