// Create a function called `findMax` that takes an array of numbers as a parameter and uses a `while` loop to find and 
// return the maximum value in the array.


function findMax(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let max = numbers[0];
    let i = 1;

    while (i < numbers.length) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        i++;
    }

    return max;
}

let numbersArray = [2, 8, 5, 12, 3];
let maxNumber = findMax(numbersArray);
console.log("The maximum value in the array is:", maxNumber);
