const LazadaOrderController = {
    orderCounter: 0, // Counter for generating unique order IDs

    //Create a new order
    createOrder(orders, userId, items, totalAmount, paymentMethod = "Credit Card") {
        if (!userId || !items || items.length === 0 || !totalAmount) {
            console.log("Error: Missing required fields");
            return { error: "Missing required fields" };
        }

        this.orderCounter++;
        const orderId = `LZ${this.orderCounter.toString().padStart(3, "0")}`; // LZ001, LZ002, etc.

        const order = {
            orderId,
            userId,
            items, // Array of item objects: [{name, qty, price}]
            totalAmount: `$${totalAmount.toFixed(2)}`,
            paymentMethod,
            orderStatus: "Processing",
            orderDate: new Date().toLocaleString('en-SG', {
                dateStyle: 'long',
                timeStyle: 'short',
                hour12: false
            })
        };

        orders.push(order);
        console.log(`Order created successfully! ID: ${orderId}, User: ${userId}`);
        return { orderId };
    },

    //Get order by ID
    getOrderById(orders, orderId) {
        const order = orders.find(o => o.orderId === orderId);
        if (!order) {
            console.log(`Order not found: ${orderId}`);
            return { error: "Order not found" };
        }
        console.log(`Retrieved order: ${orderId}`);
        return { order };
    },

    // Get all order for a specific user
    getUserOrders(orders, userId) {
        const userOrders = orders.filter(o => o.userId === userId);
        console.log(`Found ${userOrders.length} orders for user: ${userId}`);
        return { orders: userOrders };
    },

    //Get all orders (Admin view)
    getAllOrders(orders) {
        if (orders.length === 0) {
            console.log("No orders found");
            return { message: "No orders found" };
        }
        console.log(`Total orders: ${orders.length}`);
        return { orders };
    },

    //Update order status
    updateOrderStatus(orders, orderId, newStatus) {
        const validStatuses = ["Processing", "Shipped", "Delivered", "Cancelled"];
        if (!validStatuses.includes(newStatus)) {
            console.log("Invalid order status");
            return { error: "Invalid order status" };
        }

        const order = orders.find(o => o.orderId === orderId);
        if (!order) {
            console.log(`Order not found: ${orderId}`);
            return { error: "Order not found" };
        }

        order.orderStatus = newStatus;
        order.updatedDate = new Date().toLocaleString('en-SG', {
            dateStyle: 'long',
            timeStyle: 'short',
            hour12: false
        });

        console.log(`Order ${orderId} status updated to: ${newStatus}`);
        return { message: "Order status updated successfully" };
    },

    //Delete an order
    deleteOrderById(orders, orderId) {
        const index = orders.findIndex(o => o.orderId === orderId);
        if (index === -1) {
            console.log(`Order not found: ${orderId}`);
            return { error: "Order not found" };
        }

        orders.splice(index, 1);
        console.log(`Order deleted: ${orderId}`);
        return { message: "Order deleted successfully" };
    }
};

module.exports = LazadaOrderController;
