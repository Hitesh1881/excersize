// Create a function called `findMax` that takes an array of numbers as a parameter and uses a `for` loop to find and return the maximum value in the array.


function findMax(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

let numbersArray = [2, 5, 8, 11, 14];
let maxNumber = findMax(numbersArray);
console.log("The maximum value in the array is:", maxNumber);
