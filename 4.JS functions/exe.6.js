// Create a function called `capitalizeFirstLetter` that takes a string as a parameter and returns the same string with the first letter capitalised.



function capitalizeFirstLetter(inputString){
    return inputString.charAt(0).toUpperCase()+inputString.slice(1);
}

const originalString='koffeeKodes';
const capitalizedString=capitalizeFirstLetter(originalString);

console.log(`Original:${originalString}`);
console.log(`Capitalized:${capitalizedString}`);