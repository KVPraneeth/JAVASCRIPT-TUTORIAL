/**
 * Imagine an e-commerce application.

When a customer clicks the Buy Now button, we need to:
1. Create an order using an API.
2. Process payment using the order ID.
3. Fetch the order summary after successful payment.
4. Display the final summary.
The operations are dependent on one another.

Let's implement the complete flow.
 */
// ------------------------------------------------------------------------------------------------------------------//

function createOrder(cart, callback){
    setTimeout(() => {
        const order = {
            orderId: 101,
            cart: cart
        };
        console.log("Order created");
        callback(order);
    },2000)
}

function proceedToPayment(order, callback){
    setTimeout(() => {
        const payment = {
            paymentId: 1001,
            orderId: order.orderId,
            items: order.cart,
            status: "SUCCESS",
        };
        console.log("Payment successful");

        callback(payment);
    }, 2000);
}

function showOrders(payment, callback){
    setTimeout(() => {
        const summary = {
            orderId : payment.orderId,
            paymentId : payment.paymentId,
            totalAmt: 4000,
            status: "CONFIRMED",
        };
        console.log("Order Summary fetched");
        callback(summary);
    }, 2000);
}

function displaySummary(summary){
    console.log("Final Summary: ", summary);
}

const cart = ["laptop", "mouse"];

createOrder(cart, function (order){
    proceedToPayment(order, function (payment){
        showOrders(payment, function (summary){
            displaySummary(summary);
        });
    });
});