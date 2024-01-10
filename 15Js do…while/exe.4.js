// Write a program that uses a `do...while` loop to generate random numbers between 1 and 10 until a number greater than 5 is generated.
//  Log the generated numbers to the console.


let number;

do {
    number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
} while (number < 5);