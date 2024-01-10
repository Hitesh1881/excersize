// Create a function called `reverseString` that takes a string as a parameter and returns the reversed version of the string.

function reverseString(inputString){
    return inputString.split('').reverse().join('');
}

const originalString='KoffeeKodes';
const reversedString=reverseString(originalString);

console.log(`Original:${originalString}`);
console.log(`Reversed:${reversedString}`);