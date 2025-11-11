let marks = [88, 92, 79, 85, 90];

let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let average = total / marks.length;
let percentage = average; 

if (marks.some(mark => mark < 35)) {
  console.log("Detained (Failed in one or more subjects)");
} else if (percentage >= 85) {
  console.log(`Promoted with Distinction (${percentage.toFixed(2)}%)`);
} else if (percentage >= 50 && percentage < 85) {
  console.log(`Promoted (${percentage.toFixed(2)}%)`);
} else {
  console.log(`Detained (${percentage.toFixed(2)}%)`);
}
