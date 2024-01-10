// Create a function called `sumNumbers` that takes a number as a parameter and uses a `do...while` loop to calculate 
// the sum of all numbers from 1 to that given number.

function sumNumbers(number) {
    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= number);
    return sum;
}

let answer = sumNumbers(5);
console.log("the sum of number 1 to 5 is:", answer);