let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((a, b) => a + b, 0) / scores.length;

let passedCount = scores.filter(score => score >= 50).length;

let summary = `
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passedCount}
`;

console.log(summary);
