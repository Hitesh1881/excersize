// Write a program that uses a `do-while` loop to prompt the user for a number until they enter a number greater than 100.
//  Log the final number to the console.

let numbers;

do{
    numbers= prompt("Enter a number greater then 100:");
}while(!(parseFloat(numbers)>100));

console.log("the final number is :",numbers);