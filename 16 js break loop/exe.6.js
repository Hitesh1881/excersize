// Given a string:

// let sentence = "This is a sample sentence.";

// Use a `for` loop to find the index of the first occurrence of the letter "a" in the string. Log the index and break out of the loop.


let sentence = "This is a sample sentence.";

for (let i=0;sentence.length;i++){
    if(sentence[i]==="a"){
        console.log(`the first occurence of 'a' is at index: ${i}`);
        break;
    }
}   