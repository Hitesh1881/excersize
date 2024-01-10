// Given an array of strings:

// let animals = ["lion", "elephant", "zebra", "giraffe"];

// Use array methods to:
// - Check if the array contains the string "lion".
// - Find the index of the string "zebra".
// - Remove the last element from the array.
// - Log the modified array.



let animals = ["lion", "elephant", "zebra", "giraffe"];

const containsLion = animals.includes("lion");
console.log("Contains 'Lion' :",containsLion);

const indexOfZebra = animals.indexOf("zebra");
console.log("Contains'Zebra'",indexOfZebra);

animals.pop();

console.log("Modified  Array:",animals);