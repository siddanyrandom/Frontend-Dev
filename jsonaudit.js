"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const minors = [];

for (let i = 0; i < rawData.length; i++) {
  const entry = rawData[i];
  const line = i + 1;

  try {
    const parsed = JSON.parse(entry);

    if (!Object.prototype.hasOwnProperty.call(parsed, "user") || !Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("MissingKeyError");
    }

    const ageNum = Number(parsed.age);
    if (!Number.isFinite(ageNum)) {
      throw new Error("InvalidAgeError");
    }

    const record = { user: String(parsed.user), age: ageNum };
    clean.push(record);

    if (ageNum < 18) minors.push(record);

  } catch (err) {
    errors.push({ line, entry, error: err.message });
    console.log(`Error on line ${line}: ${err.name}: ${err.message}`);
    if (typeof process !== "undefined" && process.env.DEBUG === "1") debugger;
  }
}

console.log("\n--- Clean Data ---");
console.log(clean);

console.log("\n--- Errors ---");
console.log(errors);

console.log("\n--- Under-18 Users ---");
console.log(minors);
