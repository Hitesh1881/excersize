// Write a function called `isLeapYear` that takes a year as a parameter and returns `true` if it's a leap year and `false` otherwise.
//  A leap year is either divisible by 4 but not divisible by 100 unless it is divisible by 400.


function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    }
    
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
  
    return true;
  }
  
  var yearToCheck = 2024;
  var result = isLeapYear(yearToCheck);
  
  if (result) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }
  