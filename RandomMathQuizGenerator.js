const readline = require("readline-sync");

// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Randomly choose an operator
let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = num1 + num2;
    break;
  case "-":
    correctAnswer = num1 - num2;
    break;
  case "*":
    correctAnswer = num1 * num2;
    break;
  case "/":
    correctAnswer = (num1 / num2).toFixed(2);
    break;
  default:
    console.log("Invalid operator");
}

// Ask the user for their answer
let userAnswer = readline.question(`What is ${num1} ${operator} ${num2}? `);

// Check the answer
if (operator === "/") {
  if (Number(userAnswer).toFixed(2) === correctAnswer) {
    console.log("✅ Correct!");
  } else {
    console.log(`❌ Wrong! The correct answer is ${correctAnswer}`);
  }
} else {
  if (Number(userAnswer) === correctAnswer) {
    console.log("✅ Correct!");
  } else {
    console.log(`❌ Wrong! The correct answer is ${correctAnswer}`);
  }
}
