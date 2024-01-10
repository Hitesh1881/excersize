// Given the array of strings:

// let words = ["apple", "banana", "grape", "orange"];

// Use the `reduce` method to concatenate all the words into a single string. Log the result.


let words = ["apple", "banana", "grape", "orange"];

let  concatenatedString = words.reduce((old, New) => {
    return old + New;
  }, "");

  console.log(concatenatedString);