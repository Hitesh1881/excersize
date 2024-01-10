// Create a function called `calculateFactorial` that takes a number as a parameter and uses a `do...while` loop to calculate the factorial of that number.

function calculateFactorial(number){
     let factorial=1;
     let i = 1;

     do{
        factorial *= i;
        i++;
     }while(i<=number)

     return factorial;
}

let random = calculateFactorial(5);
console.log("The Factorial of 5 is:",random);