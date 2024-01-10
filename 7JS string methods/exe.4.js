// Create a function called `countVowels` that takes a string as a parameter and returns the number of vowels in the string.
//  Use the `match` method with a regular expression.


function countVowels(inputString) {
    const vowels = inputString.match(/[aeiou]/gi);

    return vowels ? vowels.length : 0;
}


const company = " KoffeeKodes!";
const numberOfVowels = countVowels(company);

console.log("Company:", company);
console.log("Number of Vowels:", numberOfVowels);
