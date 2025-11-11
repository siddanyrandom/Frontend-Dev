
const readline = require('readline-sync');

let currentSalary = Number(readline.question("Enter your current annual salary (₹): "));
let incrementRate = Number(readline.question("Enter annual increment rate (%): "));

let salaryTable = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100; 
  salaryTable.push({
    Year: year,
    "Projected Salary (₹)": Math.round(currentSalary)
  });
}

console.table(salaryTable);
