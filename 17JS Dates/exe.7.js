// Given two dates, write a function that calculates the difference in days between them. Log the result.

function calculateDateDifference(date1, date2) {
    var startDate = new Date(date1);
    var endDate = new Date(date2);
  
    var timeDifference = endDate.getTime() - startDate.getTime();
  
    var daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  
    return daysDifference;
  }
  
  var date1 = "2023-01-01"; 
  var date2 = "2023-12-31"; 
  
  var differenceInDays = calculateDateDifference(date1, date2);
  console.log(`The difference in days between ${date1} and ${date2} is: ${differenceInDays} days.`);
  