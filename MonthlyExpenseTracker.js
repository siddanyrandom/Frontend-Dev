let expenses = [12000, 3000, 8000, 2500, 1500]; 

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

let tax = total * 0.10;
let finalAmount = total + tax;

console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Final Amount after 10% Tax: ₹${finalAmount.toFixed(2)}`);
