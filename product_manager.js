class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price -= discountAmount;
    }

    getDetails() {
        return `Product ID: ${this.id}
Name: ${this.name}
Price: ₹${this.price.toFixed(2)}
Category: ${this.category}\n`;
    }
}

const products = [
    new Product(101, "Laptop", 55000, "Electronics"),
    new Product(102, "Shoes", 1200, "Fashion"),
    new Product(103, "Headphones", 900, "Electronics"),
    new Product(104, "Wrist Watch", 2500, "Accessories"),
];

products[0].applyDiscount(10);

console.log("=== ALL PRODUCTS ===");
products.forEach(p => console.log(p.getDetails()));

const filteredProducts = products.filter(p => p.price > 1000);

console.log("=== PRODUCTS WITH PRICE > 1000 ===");
filteredProducts.forEach(p => console.log(p.getDetails()));
