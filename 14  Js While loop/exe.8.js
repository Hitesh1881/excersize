// Write a program that uses a `while` loop to log a pattern of stars to the console:

// *
// **
// ***
// ****
// *****


let row = 1;

while (row <= 5) {
    let stars = '';
    let column = 1;

    while (column <= row) {
        stars += '*';
        column++;
    }

    console.log(stars);
    row++;
}
