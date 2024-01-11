// Given the current date, use a function to calculate and log the date and time exactly one week (7 days) from now.


function calculateOneWeekFromNow() {
  var currentDate = new Date();

  var oneWeekFromNow = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  console.log("Current Date and Time:", currentDate);
  console.log("One Week from Now:", oneWeekFromNow);
}

calculateOneWeekFromNow();
