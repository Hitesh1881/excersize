// Given a string:

// let sentence = "The quick brown fox jumps over the lazy dog.";

// Use string methods to:
// - Log the length of the string.
// - Convert the string to all lowercase.
// - Convert the string to all uppercase.
// - Check if the string includes the word "fox".


let sentence = "The quick brown fox jumps over the lazy dog.";

console.log(`Length of string :${sentence.length}`);

let lowercaseSentence = sentence.toLowerCase();
console.log(`Lowercase string :${lowercaseSentence}`);

let uppercaseSentence = sentence.toUpperCase();
console.log(`Uppercase string :${uppercaseSentence}`);

let includesFox = sentence.includes("fox");
console.log(`the string includes the word "fox"? ${includesFox}`);


function countOccurrences(inputString, char) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === char) {
            count++;
        }
    }

    return count;
}

// Example usage:
const testString = "hello, world!";
const charToCount = "l";
const occurrences = countOccurrences(testString, charToCount);
console.log(`Number of occurrences of '${charToCount}' in "${testString}": ${occurrences}`);
