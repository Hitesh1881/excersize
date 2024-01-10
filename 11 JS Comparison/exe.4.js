// Create a function called `compareStrings` that takes two strings as parameters and returns a message indicating whether the strings are
//  equal or not.




function compareStrings(string1, string2) {
    if (string1 === string2) {
        return "The strings are equal.";
    } else {
        return "The strings are not equal.";
    }
}

let result1 = compareStrings("hello", "world");
console.log(result1);

let result2 = compareStrings("apple", "apple");
console.log(result2);
