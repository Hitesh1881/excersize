// Given the array of mixed data types:

// let mixedArray = [42, "apple", true, "banana", 7, "orange", false];

// Use the `sort` method to group the elements by their data types. Log the sorted array.


let mixedArray = [45, "apple", true, "banana", 7, "orange", false];

function sortByDataType(a, b) {
    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA < typeB) {
        return -1;
    } else if (typeA > typeB) {
        return 1;
    } else {
        return 0;
    }
}

mixedArray.sort(sortByDataType);

console.log(mixedArray);