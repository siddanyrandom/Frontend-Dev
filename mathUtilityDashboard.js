let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

let result = `
Rounded Value: ${rounded}
Square Root: ${squareRoot}
x³: ${power}
Random (10–50): ${randomNum}
`;

console.log(result);
