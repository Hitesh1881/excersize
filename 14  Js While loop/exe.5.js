// Write a program that uses a `while` loop to log the Fibonacci sequence up to the 10th term. 
// The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding terms (0, 1, 1, 2, 3, 5, 8, 13, 21, 34).



let termCount = 10;
let currentTerm = 0;
let nextTerm = 1;
let i = 1;

while (i <= termCount) {
    console.log(currentTerm);

    let temp = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = temp;

    i++;
}