// Create a function called `reverseString` that takes a string as a parameter and uses a `do...while` loop to reverse the characters in the string.
//  Log the reversed string to the console.


function reverseString(random){
    let reverseString='';
    let i=random.length-1;

    do{
        reverseString += random[i];
        i--;
    }while (i>=0);

    console.log("Reversed String:",reverseString);
}

reverseString("KoffeeKodes");