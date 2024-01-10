// Given the following array:

// let numbers = [1, 2, 3, 4, 5];

// Use array methods to:
// - Log the length of the array.
// - Add a new number to the end of the array.
// - Remove the first number.
// - Log the modified array.


let numbers = [1, 2, 3, 4, 5];
console.log("Length Of Array:",numbers.length);

numbers.push(6);

numbers.shift(3);

console.log("Modified Array:",numbers);