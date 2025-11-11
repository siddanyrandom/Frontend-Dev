let userName = "Siddhartha";
let age = 21;
let isActive = true;
let hobbies = ["coding", "gym", "reading"];
let address = { city: "Mathura", country: "India" };
let score = null;
let tempValue;

let dataSummary = [
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "age", Value: age, Type: typeof age },
  { Label: "isActive", Value: isActive, Type: typeof isActive },
  { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "address", Value: address, Type: typeof address },
  { Label: "score", Value: score, Type: typeof score },
  { Label: "tempValue", Value: tempValue, Type: typeof tempValue }
];

console.table(dataSummary);
