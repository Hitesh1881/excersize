// Create a function called `checkArray` that takes an array as a parameter. If the array is empty, log "Array is empty";
//  otherwise, log the first element of the array.


function checkArray(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
    } else {
        console.log("The first element of the array is:", arr[0]);
    }
}

checkArray([]);
checkArray([10, 20, 30]); 