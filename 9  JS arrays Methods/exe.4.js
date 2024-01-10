// Create a function called `findMax` that takes an array of numbers as a parameter and uses the `reduce` method to return the maximum value in the array.

function findMax(numbers) {
  if (numbers.length === 0) {
    // Handle the case where the array is empty
    return undefined;
  }

  // Use reduce to find the maximum value
  let max = numbers.reduce((accumulator, currentNumber) => {
    return Math.max(accumulator, currentNumber);
  }, numbers[0]);

  return max;
}
let Number=[1,2,3,6,5,4,7,8,9];
let maxNumber = findMax(Number);

console.log("Maximum Value:",maxNumber);    