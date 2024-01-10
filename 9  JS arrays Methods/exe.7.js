// Create a function called `findIndex` that takes an array of strings as a parameter and uses the `findIndex` method to return
//  the index of the first string that starts with the letter "B".

function findIndex(strings){
   const index= strings.findIndex(str=>str.startsWith("b"));

   return index ;
}

let wordsArray = ["orange","banana","lichi","strawberry"];
let indexWithB = findIndex(wordsArray);

console.log("Index with letter start 'B':",indexWithB);