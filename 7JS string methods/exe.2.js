// Create a function called `capitalizeFirstLetter` that takes a string as a parameter and returns the same string with the first letter capitalised.
//  Use the `toUpperCase` and `slice` methods

function capitalizeFirstLetter(inputString) {
    if (inputString.length === 0) {
        return inputString;
    }

    const capitalizedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

    return capitalizedString;
}

const originalString = "koffee kodes";
const capitalizedString = capitalizeFirstLetter(originalString);

console.log("Original String:", originalString);

console.log("Capitalized String:", capitalizedString);