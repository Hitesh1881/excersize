// Create a function called `formatDate` that takes a date as a parameter and returns a formatted string in the format "YYYY-MM-DD".
//  For example, if the input is a date representing January 15, 2023, the output should be "2023-01-15".


function formatDate(inputDate) {
    var dateObject = new Date(inputDate);
  
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
    var day = String(dateObject.getDate()).padStart(2, '0');
  
    var formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }
  
  var inputDate = "2023-01-15"; 
  
  var formattedDate = formatDate(inputDate);
  console.log("Formatted Date:", formattedDate);
  