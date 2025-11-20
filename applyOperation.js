function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * 2;
}

const nums = [1, 2, 3, 4];

console.log(applyOperation(nums, double)); 
console.log(applyOperation(nums, square)); 
