// Create a function called `logArrayIndices` that takes an array as a parameter and uses a `for...in` loop to 
// log each index and its corresponding element to the console.


function logArrayIndices(array) {
    for (let index in array) {
        console.log(`Index ${index}: ${array[index]}`);
    }
}

let fruits = ["apple", "lichi", "banana", "kiwi"];
logArrayIndices(fruits);