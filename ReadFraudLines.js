const fs = require("fs");
const normalize = require("./Normailze");

let readFraudLines = filePath => {
  let orders = [];
  let fileContent;

  try {
    fileContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.log(err);
  }

  class Order {
    constructor(items) {
      (this.orderId = items[0]),
        (this.dealId = items[1]),
        (this.email = items[2]),
        (this.street = items[3]),
        (this.city = items[4]),
        (this.state = items[5]),
        (this.zipCode = items[6]),
        (this.creditCard = items[7]);
    }

    format() {
      (this.orderId = Number(this.orderId)),
        (this.dealId = Number(this.dealId)),
        (this.email = this.email.toLowerCase()),
        (this.street = this.street.toLowerCase()),
        (this.city = this.city.toLowerCase()),
        (this.state = this.state.toLowerCase());
      return this;
    }
   }

  let lines = fileContent.split("\n");
  for (let line of lines) {
    let items = line.split(",");
    let myOrder = new Order(items).format();
    myOrder.email, myOrder.street, myOrder.state = normalize.normalize( myOrder.email, myOrder.street, myOrder.state );
    orders.push(myOrder);
  }

  return orders;
};

module.exports = { readFraudLines };
