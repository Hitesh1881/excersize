// Write a function called `calculateSquare` that takes an array of numbers as a parameter and uses the `forEach` method to square each 
// element in the array. Log the modified array to the console.


function calculateSquare(number){
    let squaredArray = [];
    
    numbers.forEach(function(number){
        squaredArray.push(number * number);
    });
    console.log("Modified Array:",squaredArray);
}

let nnn = [1,2,3,4,5,6,7,8,9,10];
calculateSquare(nnn);