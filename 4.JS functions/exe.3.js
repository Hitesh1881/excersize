// Write a function called `isEven` that takes an integer as a parameter and returns `true` if it's an even number and `false` otherwise.

function isEven(number){
    return number %2===0;
}

const exampleNumber =8;
const ans = isEven(exampleNumber);
console.log(`${exampleNumber}is even:${ans}`);