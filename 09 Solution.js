function placeOrder(orderNumber) {
    return new Promise((resolve) => {
        let randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 6 seconds
        setTimeout(() => {
            resolve(`Order number ${orderNumber} has been placed successfully.`);
        }, randomDelay);
    });
}

let orderNumber = prompt("Please Enter your order number");
placeOrder(orderNumber).then(message => alert(message));
