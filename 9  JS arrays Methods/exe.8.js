// Given the array of numbers:

// let temperatures = [23, 18, 30, 15, 27];

// Use the `some` method to check if at least one temperature is above 25 degrees.


let temperatures = [23, 18, 30, 15, 27];

let condition = temperatures.some(temperature => temperature > 25);

if (condition) {
  console.log("At least one temperature is above 25 degrees.");
} else {
  console.log("No temperature is above 25 degrees.");
}