// Create a function called `sortDescending` that takes an array of numbers as a parameter and uses the `sort` method to sort
//  the numbers in descending order. Log the sorted array.


function sortDescending(numbers) {
    numbers.sort((a, b) => b - a);

    console.log(numbers);
}

let numbers = [10, 3, 8, 1, 7];
sortDescending(numbers);
