

const orderController = require('./peiqi_lazada.js');

// Simulated database (array)
const orders = [];

// create orders
console.log("=== Creating Orders ===");
orderController.createOrder(orders, "User001", [
    { name: "Wireless Mouse", qty: 1, price: 15.99 },
    { name: "USB-C Charger", qty: 2, price: 12.50 }
], 40.99);

orderController.createOrder(orders, "User002", [
    { name: "Bluetooth Speaker", qty: 1, price: 45.00 }
], 45.00);

orderController.createOrder(orders, "User001", [
    { name: "Laptop Stand", qty: 1, price: 25.00 }
], 25.00);

console.log(orders);

//get user orders
console.log("Get Orders for User001");
const userOrders = orderController.getUserOrders(orders, "User001");
console.log(userOrders);

//get all orders
console.log("Get All Orders");
const allOrders = orderController.getAllOrders(orders);
console.log(allOrders);

//update order status 
console.log("Updating Order Status (LZ001 to Delivered)");
orderController.updateOrderStatus(orders, "LZ001", "Delivered");
console.log(orders);

//delete an order
console.log("Deleting Order LZ002");
orderController.deleteOrderById(orders, "LZ002");
console.log(orders);

//find order by ID
console.log("Get Order by ID (LZ003)");
const order = orderController.getOrderById(orders, "LZ003");
console.log(order);

