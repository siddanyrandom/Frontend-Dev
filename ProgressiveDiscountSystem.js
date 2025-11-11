let totalPurchase = 7200;
let discountPercent = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;

console.log(`Original Total: ₹${Math.round(totalPurchase)}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final Price after Discount: ₹${Math.round(finalPrice)}`);
