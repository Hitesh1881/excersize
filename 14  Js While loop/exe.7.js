// Create a function called `reverseArray` that takes an array as a parameter and uses a `while` loop to reverse the elements of the array.
//  Log the reversed array to the console.


function reverseArray(arr) {
    let reversedArray = [];
    let i = arr.length - 1;

    while (i >= 0) {
        reversedArray.push(arr[i]);
        i--;
    }

    console.log("Reversed Array:", reversedArray);
}

let originalArray = [1, 2, 3, 4, 5];
reverseArray(originalArray);
