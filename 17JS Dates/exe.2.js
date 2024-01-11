// Create a function called `getDayOfWeek` that takes a date as a parameter and logs the day of the week (e.g., "Monday", "Tuesday") to the console.

function getDayOfWeek(inputDate) {
  var dateObject = new Date(inputDate);

  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var dayIndex = dateObject.getDay();

  console.log("Day of the week:", daysOfWeek[dayIndex]);
}

var currentDate = new Date();
getDayOfWeek(currentDate);
