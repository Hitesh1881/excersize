// Create a function called `calculateSum` that takes a number as a parameter and uses a `while` loop to calculate the sum of 
// all numbers from 1 to that given number.



function calculateSum(number) {
    let sum = 0;
    let i = 1;

    while (i <= number) {
        sum += i;
        i++;
    }

    return sum;
}

let result = calculateSum(5);
console.log("The sum of numbers from 1 to 5 is:", result);