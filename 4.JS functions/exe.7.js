// Write a function called `countVowels` that takes a string as a parameter and returns the number of vowels in the string.


function countVowels(inputSrtring){
    const  vowels='aeiouAEIOU';
    let vowelCount = 0;

    for (let char of inputSrtring){
        if(vowels.includes(char)){
            vowelCount++;
        }
    }

    return vowelCount;
}

const testString = 'KoffeeKodes';
const numberOfVowels=countVowels(testString);

console.log(`Number of vowels in "${testString}":${numberOfVowels}`);