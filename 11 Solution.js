// Define an array of product objects
let products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Shirt', price: 20, category: 'Clothing' },
    { name: 'Book', price: 15, category: 'Books' },
    { name: 'Phone', price: 700, category: 'Electronics' },
    { name: 'Jeans', price: 50, category: 'Clothing' },
];

// Define the filterProducts function
function filterProducts(products, criterion) {
    return products.filter(product => product.category === criterion);
}

// Use the function to filter products by 'Electronics' category
let filteredProducts = filterProducts(products, 'Electronics');

// Log the filtered products
console.log(filteredProducts);
