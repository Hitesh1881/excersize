// Write a program that uses a `do...while` loop to prompt the user for a number until they enter a valid positive number.
//  Log the final number to the console.


let number;
let valid = false;

do {
    number = prompt("Positive Number enter..");

    number = !isNaN(number) && number > 0

    if (!number) {
        console.log("Please enter positive number...");
    }

} while (!number);
console.log("The valid number is:", number);