// Write a program that uses a `while` loop to generate random numbers between 1 and 10 until a number greater than 5 is generated.
//  Log the generated numbers to the console.


let xyz;

while (true) {
    xyz = Math.floor(Math.random() *10)+1;
    console.log(xyz);

    if(xyz >5){
        break;
    }
}