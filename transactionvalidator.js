"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  debugger; 

  try {
    const t = transactions[i];

    if (t === null) throw new Error("Null transaction");
    if (t.id === undefined || t.amount === undefined)
      throw new Error("Missing property");
    if (t.amount < 0) throw new Error("Negative amount");

    valid.push(t);
  } catch (err) {
    invalid.push({ index: i, error: err.message });
  }
}

console.log("===== Transaction Report =====");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
