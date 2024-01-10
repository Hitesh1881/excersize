// Create a function called `doubleNumbers` that takes an array of numbers as a parameter and uses the `forEach` method to double each 
// element in the array. Log the modified array to the console.

function doubleNumbers(numbers) {
    let doubledArray = [];

    numbers.forEach(function (element) {
        doubledArray.push(element * 2);
    });

    console.log("Modified Array:", doubledArray);
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
doubleNumbers(number);