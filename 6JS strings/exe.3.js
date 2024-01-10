// Create a function called `countOccurrences` that takes a string and a character as parameters. 
// The function should return the number of occurrences of the character in the string.


function countOccurrences(inputString, char) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === char) {
            count++;
        }
    }

    return count;
}
const Company_name = "Koffee,Kodes!!";
const charToCount = "e";
const occurrences = countOccurrences(Company_name, charToCount);
console.log(`Number of occurrences of '${charToCount}' in "${Company_name}": ${occurrences}`);