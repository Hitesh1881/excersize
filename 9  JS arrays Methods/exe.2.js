// Create a function called `filterEvenNumbers` that takes an array of numbers as a parameter and uses the `filter` method to return 
// a new array containing only the even numbers.

function filterEvenNumbers(numbers){
    const evenNumbers = numbers.filter(number=>number %2===0);
    return evenNumbers;
}

const numbersArray = [1,2,3,4,5,6,7,8,9,15,161,4844,63263]
const evenNumbersArray = filterEvenNumbers(numbersArray);

console.log("Original Array:",numbersArray);
console.log("Even Number Array:",evenNumbersArray);