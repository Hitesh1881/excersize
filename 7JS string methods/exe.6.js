// Create a function called `truncateString` that takes a string and a maximum length as parameters.
//  If the string is longer than the maximum length, truncate it and append "..." to the end. Use the `slice` method.

function truncateString(inputString,maxLength){

    if (inputString.length >maxLength ){
        return inputString.slice(0,maxLength)+"...";
    }else{
        return inputString;
    }
}

const originalString ="Hey  !! i am using a visual studio code..";

const maxLength=20;

const truncatedString = truncateString(originalString, maxLength);


console.log("Original String:",originalString);
console.log("Trunted String:",truncatedString);