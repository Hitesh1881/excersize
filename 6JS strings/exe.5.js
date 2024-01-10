// Create a function called `reverseWords` that takes a sentence as a parameter and returns a new sentence with the words reversed.
//  For example, if the input is "Hello World", the output should be "World Hello".


function reverseWords(sentence){

    const wordsArray=sentence.split('');

    const reverseWordsArray = wordsArray.reverse();

    const reversedSentence = reverseWordsArray.join('');

    return reversedSentence;
}

const inputSentence = "KoffeeKodes";
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);