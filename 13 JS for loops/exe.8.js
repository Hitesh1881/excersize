// Write a program that uses nested `for` loops to log a pattern of stars to the console:

// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {
    let stars = '';

    for (let j = 1; j <= i; j++) {
        stars += '*';
    }

    console.log(stars);
}
