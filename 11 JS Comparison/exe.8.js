// Create a function called `isLeapYear` that takes a year as a parameter and returns `true` if it's a leap year and `false` otherwise.
//  A leap year is either divisible by 4 but not divisible by 100 unless  it is divisible by 400.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let year1 = 2020;
console.log(`${year1} is a leap year: ${isLeapYear(year1)}`); // Output: true

let year2 = 2022;
console.log(`${year2} is a leap year: ${isLeapYear(year2)}`); // Output: false
