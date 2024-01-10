// Create a function called `findMax` that takes an array of numbers as a parameter and returns the maximum value in the array.

function findMax(numbers){
   const maxNumber= Math.max(...numbers);

   return maxNumber
}

const numbersArray = [2,6,9,77,4,5,6,3,2,1,4,55];
const maxResult= findMax(numbersArray);
console.log("Max Numer:",maxResult);