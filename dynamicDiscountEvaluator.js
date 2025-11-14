const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedCart = [];

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - price * 0.10;
    } else if (product.category === "fashion") {
        price = price - price * 0.05;
    }

    discountedCart.push(price);
}

let total = discountedCart.reduce((a, b) => a + b, 0);

if (total > 50000) {
    total = total - total * 0.05;
}

console.log("Final Total:", total);
