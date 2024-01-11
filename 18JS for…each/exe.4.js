// Create a function called `calculateSum` that takes an array of numbers as a parameter and uses the `forEach` method to calculate 
// the sum of all numbers in the array. Log the sum to the console.


function calculateSum(numbers) {
    let sum = 0;

    numbers.forEach(function (number) {
        sum += number;
    });

    console.log("Sum of the number :", sum);
}

let ppp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

calculateSum(ppp);