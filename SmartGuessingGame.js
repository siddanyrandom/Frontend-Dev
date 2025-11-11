

const readline = require('readline-sync');

let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = Number(readline.question("Guess a number between 1 and 50: "));

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
  console.log(`Very close! The secret number was ${secretNumber}.`);
} else if (userGuess > secretNumber) {
  console.log(`Too high! The secret number was ${secretNumber}.`);
} else {
  console.log(`Too low! The secret number was ${secretNumber}.`);
}
