const EventEmitter = require('node:events')

// const eventEmitter = new EventEmitter()
// eventEmitter.on('abcd', () => {
//     console.log('event fired');
// })
// eventEmitter.emit('abcd')

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderId = 0
    }
    orderPizza(size, ...toppings) {
        this.orderId++
        console.log(`placed order for ${size} sized pizza with toppings ${toppings}`);
        this.emit('order-placed', this.orderId, size)
    }
}

class DrinksVendingMachine {
    serveForDrinks(size) {
        console.log(`serving drink for ${size} pizza`);
    }
}


const shop = new PizzaShop()
const vendingMachine = new DrinksVendingMachine()
shop.on('order-placed', (orderId, size) => {
    console.log(`you order id is:${orderId}`);
    vendingMachine.serveForDrinks(size)
})


shop.orderPizza('large', 'mushroom', 'paneer')