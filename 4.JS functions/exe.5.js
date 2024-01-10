// Write a function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sumArray(numbers){
    return numbers.reduce((sum,num)=>sum+num,0);
}

const numberArray=[1,2,3,4,5,6];
const arraySum=sumArray(numberArray);

console.log(`sum of the array:${arraySum}`);