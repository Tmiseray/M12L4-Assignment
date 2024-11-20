// Kitchen Queue

class Order {
    constructor() {
        this.foodItems = {};
        this.drinkItems = {};
    }

    addFood(food, quantity) {
        if (this.foodItems[food]) {
            this.foodItems[food] += quantity;
        } else {
            this.foodItems[food] = quantity;
        }
    }

    addDrink(drink, quantity) {
        if (this.drinkItems[drink]) {
            this.drinkItems[drink] += quantity;
        } else {
            this.drinkItems[drink] = quantity;
        }
    }
}

class OrdersQueue {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    removeOrder() {
        if (!this.isEmpty()) {
            const removedOrder = this.orders.shift();
            console.log('\n** Order Completed and Removed from Queue: \n');
            this.orderDetails(removedOrder);
        }
    }

    isEmpty() {
        return this.orders.length === 0;
    }

    size() {
        return this.orders.length;
    }

    displayOrders() {
        if (this.isEmpty()) {
            console.log('** Currently, there are no orders in the queue.');
        } else {
            console.log('\n Orders in Queue: \n');
            this.orders.forEach((order, i) => {
                console.log(`Order ${i + 1}`);
                this.orderDetails(order);
            });
        }
    }

    orderDetails(order) {
        if (Object.keys(order.foodItems).length > 0) {
            console.log('~ Food Items:');
            for (const [food, quantity] of Object.entries(order.foodItems)) {
                console.log(`   * ${quantity} -> ${food}`);
            }
        } else {
            console.log('~ No food items.');
        }

        if (Object.keys(order.drinkItems).length > 0) {
            console.log('~ Drink Items:');
            for (const [drink, quantity] of Object.entries(order.drinkItems)) {
                console.log(`   * ${quantity} -> ${drink}`);
            }
        } else {
            console.log('~ No drink items.');
        }

        console.log('-'.repeat(21));
    }
}

const order1 = new Order();
order1.addFood('Cheese Burger', 2);
order1.addFood('Fries', 1);
order1.addDrink('Coke', 2);

const order2 = new Order();
order2.addFood('Pepperoni Pizza', 1);
order2.addDrink('Sprite', 1);
order2.addDrink('Sweet Tea', 1);

const order3 = new Order();
order3.addDrink('Chocolate Milkshake', 3);


const queue = new OrdersQueue();

queue.displayOrders();

queue.addOrder(order1);
queue.addOrder(order2);
queue.addOrder(order3);


queue.displayOrders();

queue.removeOrder();

queue.displayOrders();