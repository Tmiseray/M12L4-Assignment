# Kitchen Queue

class Order:
    def __init__(self):
        self.food_items = {}
        self.drink_items = {}

    def add_food(self, food, quantity):
        if food in self.food_items:
            self.food_items[food] += quantity
        else:
            self.food_items[food] = quantity

    def add_drink(self, drink, quantity):
        if drink in self.drink_items:
            self.drink_items[drink] += quantity
        else:
            self.drink_items[drink] = quantity


class OrdersQueue:
    def __init__(self):
        self.orders = []

    def add_order(self, order):
        self.orders.append(order)

    def remove_order(self):
        if not self.is_empty():
            removed_order = self.orders.pop(0)
            print(f'\n** Order Completed and Removed from Queue: \n')
            self.order_details(removed_order)

    def is_empty(self):
        return len(self.orders) == 0
    
    def size(self):
        return len(self.orders)
    
    def display_orders(self):
        if self.is_empty():
            print('** Currently, there are no orders in the queue.')
        else:
            print('\n Orders in Queue: \n')
            for i, order in enumerate(self.orders, start=1):
                print(f'Order {i}:')
                self.order_details(order)

    def order_details(self, order):
        if order.food_items:
            print('~ Food Items:')
            for food, quantity in order.food_items.items():
                print(f'   * {quantity} -> {food}')
        else:
            print('~ No food items.')

        if order.drink_items:
            print('~ Drink Items:')
            for drink, quantity in order.drink_items.items():
                print(f'   * {quantity} -> {drink}')
        else:
            print('~ No drink items.')

        print(21 * '-')


order1 = Order()
order1.add_food('Cheese Burger', 2)
order1.add_food('Fries', 1)
order1.add_drink('Coke', 2)

order2 = Order()
order2.add_food('Pepperoni Pizza', 1)
order2.add_drink('Sprite', 1)
order2.add_drink('Sweet Tea', 1)

order3 = Order()
order3.add_drink('Chocolate Milkshake', 3)


queue = OrdersQueue()
queue.add_order(order1)
queue.add_order(order2)
queue.add_order(order3)

queue.display_orders()

removed_order = queue.remove_order()


queue.display_orders()