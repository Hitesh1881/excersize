// Create a function called `findIndex` that takes an array of numbers and a target number as parameters.
//  Use a `for` loop to find the index of the target number in the array.
//   If the target number is not found, log a message indicating that it is not in the array and break out of the loop.



function findIndex(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            console.log(`Target number ${target} found at index ${i}.`);
            return i;
        }
    }

    console.log(`Target number ${target} is not in the array.`);
    return -1;
}

const iii = [1, 5, 7, 10, 15];
const targetNumber = 7;

const index = findIndex(iii, targetNumber);