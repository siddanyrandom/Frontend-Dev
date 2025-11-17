"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("===== Dynamic Data Parser Report =====\n");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  const asNumber = Number(value);
  const asBoolean = Boolean(value);
  const asString = String(value);

  console.log(`Index ${i}:`);
  console.log(`  Original:`, value);
  console.log(`  -> Number:`, asNumber);
  console.log(`  -> Boolean:`, asBoolean);
  console.log(`  -> String:`, asString);

  if (Number.isNaN(asNumber)) {
    invalidNumbers.push(value);
    console.log("  ** Invalid Number detected **");
  } else {
    validNumbers.push(asNumber);
  }

  console.log("----------------------------------");
}

console.log("\n===== Summary =====");
console.log("Valid Numeric Values:", validNumbers);
console.log("Invalid Numeric Values:", invalidNumbers);

console.log("\n===== End of Report =====");
