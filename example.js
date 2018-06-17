const orders = [{
    orderId: 1,
    dealId: 1,
    email: 'bugs@bunny.com',
    street: '123 sesame st.',
    city: 'new york',
    state: 'ny',
    zipCode: '10011',
    creditCard: '12345689010'
  },
  {
    orderId: 2,
    dealId: 1,
    email: 'bugs@bunny.com',
    street: '123 sesame st.',
    city: 'new york',
    state: 'ny',
    zipCode: '10011',
    creditCard: '12345689011'
  },
  {
    orderId: 3,
    dealId: 2,
    email: 'roger@rabbit.com',
    street: '1234 not sesame st.',
    city: 'colorado',
    state: 'cl',
    zipCode: '10012',
    creditCard: '12345689012'
  },
  {
    orderId: 4,
    dealId: 2,
    email: 'roger@rabbit.com',
    street: '1234 not sesame st.',
    city: 'colorado',
    state: 'cl',
    zipCode: '10012',
    creditCard: '12345689014'
  }]

function * __getOrders () {
    for(let i = 0; i < orders.length; i++) {
        yield orders[i]
    }
}

function getOrders () {
     return [...__getOrders()]
}