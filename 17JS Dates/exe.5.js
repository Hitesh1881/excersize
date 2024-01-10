// Create a program that logs the number of days remaining until the end of the current month.

function daysRemainingInMonth() {
    var currentDate = new Date();
  
    var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
    var daysRemaining = lastDayOfMonth.getDate() - currentDate.getDate() + 1;
  
    console.log(`Days remaining until the end of the month: ${daysRemaining}`);
  }
  
  daysRemainingInMonth();
  