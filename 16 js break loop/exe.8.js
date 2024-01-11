// Create a function called `findPositive` that takes an array of numbers as a parameter. 
// Use a `for` loop to find the first positive number in the array. Log the result and break out of the loop.


function findPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            console.log(`The first positive number is: ${numbers[i]}`);
            break;
        }
    }
}

let qqq = [3, 2, -8, 4, 5, -7];
findPositive(qqq);  