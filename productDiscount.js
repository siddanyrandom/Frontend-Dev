function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(20));
console.log(p3.name, p3.applyDiscount(15));

console.log("Abstraction helps because we only call applyDiscount() without worrying about internal price calculations.");
