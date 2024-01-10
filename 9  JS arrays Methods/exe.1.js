// Given the following array:

// let numbers = [1, 4, 9, 16, 25];

// Use the `map` method to create a new array that contains the square root of each number. Log the new array.


let numbers = [1, 4, 9, 16, 25];


let squareRoots = numbers.map(number=>Math.sqrt(number));

console.log("Square Root Array:",squareRoots);