// Create a function called `reverseArray` that takes an array as a parameter and uses a `for` loop to reverse the elements of the array.
//  Log the reversed array to the console.

function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    console.log("Reversed Array:", reversedArray);
}

let originalArray = [1, 2, 3, 4, 5];
reverseArray(originalArray);
