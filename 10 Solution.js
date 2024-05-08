async function brewCoffee(CoffeeType) {
    return new Promise((resolve) => {
        let randomDelay = Math.floor(Math.random() * 10000) + 2000;  // Random delay between 2 and 10 seconds
        setTimeout(() => {
            resolve(`Your ${CoffeeType} coffee is ready! Enjoy!`);
        }, randomDelay);
    })
}

let CoffeeType = prompt("Hello which type of coffee would you like to take?");
brewCoffee(CoffeeType).then(message => alert(message));
