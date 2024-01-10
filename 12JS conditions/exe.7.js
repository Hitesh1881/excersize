// Write a program that checks if a given year is a leap year.
//  A leap year is either divisible by 4 but not divisible by 100 unless it is divisible by 400. Log the result to the console.


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYear(2020);
isLeapYear(2022);  