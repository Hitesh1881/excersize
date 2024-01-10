// Write a function called `getMonthDays` that takes a month (in the range of 1 to 12) and a year as parameters and returns the number of days in that month. Consider leap years.

function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    }
  
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
  
    return true;
  }
  
  function getMonthDays(month, year) {
    if (month < 1 || month > 12) {
      throw new Error("Invalid month. Month should be in the range of 1 to 12.");
    }
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
  
    return daysInMonth[month - 1];
  }
  
  var monthToCheck = 2;
  var yearToCheck = 2024;
  
  var daysInMonth = getMonthDays(monthToCheck, yearToCheck);
  console.log(`Number of days in ${monthToCheck}/${yearToCheck}: ${daysInMonth}`);
  