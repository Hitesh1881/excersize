// Create a function called `filterEvenNumbers` that takes an array of numbers as a parameter and uses the `forEach` method to log 
// only the even numbers to the console.

function filterEvenNumbers(numbers){
    numbers.forEach(function(number) {
        if (number %2===0 ){
            console.log(number);
        }
    });
}

let yyy=[1,2,3,4,5,6,7,8,9,10];
filterEvenNumbers(yyy);