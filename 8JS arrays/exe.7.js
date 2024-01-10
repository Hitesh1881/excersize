// Create a function called `filterEvenNumbers` that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

function filterEvenNumbers(number){

    const evenNumbers= number.filter(number=>number %2===0);

    return evenNumbers
}

const numbersArray=[1,2,3,4,5,6,7,8,9,10];
const evenNumbersArray=filterEvenNumbers(numbersArray);

console.log("Original array:",numbersArray);
console.log("Even Number array:",evenNumbersArray);