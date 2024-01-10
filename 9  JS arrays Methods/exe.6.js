// Given the following array:

// let numbers = [2, 4, 6, 8, 10];

// Use the `every` method to check if all numbers in the array are even.


let numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(number=>number%2===0);

if(allEven){
    console.log("All number are even");
}else{
    console.log("not all number are even");
}