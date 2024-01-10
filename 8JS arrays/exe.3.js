// Create a function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.


function sumArray(numbers){

    const totalSum = numbers.reduce((old,currentValue)=>old+currentValue,0);
    return totalSum;
}

const numbersArray = [1,2,3,4,5];
const result = sumArray(numbersArray);

console.log("Array:",numbersArray);
console.log("Sum of Array:",result);