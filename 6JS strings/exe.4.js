// Given the following string:

// let phrase = "Programming is fun, and JavaScript is awesome!";

// Use string methods to:
// - Extract the word "JavaScript".
// - Find the index of the word "fun".
// - Replace "awesome" with "fantastic".


let phrase = "Programming is fun, and JavaScript is awesome!!";

let extractedWord = phrase.slice(31,41);
console.log(extractedWord);

let indexOfFun = phrase.indexOf("fun");
console.log(indexOfFun);

let replacedPhrase = phrase.replace("awesome", "fantastic");
console.log(replacedPhrase);