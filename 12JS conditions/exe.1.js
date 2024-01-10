// Write a program that checks whether a given number is positive, negative, or zero. Log the result to the console.

function checkNumber (number){
    if (number > 0) {
        console.log(`${number} is positive.`);
      } else if (number < 0) {
        console.log(`${number} is negative.`);
      } else {
        console.log(`${number} is zero.`);
      }
    }