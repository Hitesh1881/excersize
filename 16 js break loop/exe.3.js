// Given an array of strings:

// let fruits = ["apple", "orange", "banana", "grape", "kiwi"];

// Use a `for` loop to find the index of the string "banana." Once found, log the index and break out of the loop.


let fruits = ["apple", "orange", "banana", "grape", "kiwi"];

for (let i=0; i<fruits.length;i++){
    if(fruits[i]===banana){
        console.log(`index of "banana":${i}`);
        break;
    }
}