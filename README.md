# Assignment 1
Description
Using Lazada as a reference, this Node.js module simulates a basic order management system found in e-commerce platforms.
It allows users to create, view, update, and delete orders, similar to features in Lazada’s order tracking system.


Installation
Just import or require the file into your Node.js project.

const orderController = require("./peiqi_EGL301.js");


Module Functions

createOrder(orders, userId, items, totalAmount, paymentMethod)
Return Type: Object

Uses 5 parameters when creating a new order.
orders: Array,
userId: String,
items: Array of objects ([{name, qty, price}]),
totalAmount: Number,
paymentMethod: String (default is "Credit Card")

This function creates a new order and automatically generates a unique order ID (e.g., LZ001, LZ002).

getOrderById(orders, orderId)
Return Type: Object

Uses 2 parameters when retrieving a specific order.
orders: Array,
orderId: String

This function returns the details of a single order by its ID.

getUserOrders(orders, userId)
Return Type: Object

Uses 2 parameters when getting all orders from a specific user.
orders: Array,
userId: String

This function returns all orders made by a specific user.

getAllOrders(orders)
Return Type: Object

Uses 1 parameter when retrieving all orders.
orders: Array

This function returns all existing orders (admin view).

updateOrderStatus(orders, orderId, newStatus)
Return Type: Object

Uses 3 parameters when updating an order’s delivery status.
orders: Array,
orderId: String,
newStatus: String

Valid status options: "Processing", "Shipped", "Delivered", "Cancelled".

deleteOrderById(orders, orderId)
Return Type: Object

Uses 2 parameters when deleting an order.
orders: Array,
orderId: String

Deletes an existing order from the list using its order ID.


# References
https://www.lazada.sg/#?