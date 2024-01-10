// Create a function called `reverseWords` that takes a sentence as a parameter and returns a new sentence with the words reversed.
//  Use the `split`, `reverse`, and `join` methods.

function reverseWords(sentence) {
    
    const wordsArray = sentence.split(' ');

    const reversedWordsArray = wordsArray.reverse();

    const reversedSentence = reversedWordsArray.join(' ');

    return reversedSentence;
}


const inputSentence = " Koffee Kodes";
const reversedSentence = reverseWords(inputSentence);

console.log("Original Sentence:", inputSentence);
console.log("Reversed Sentence:", reversedSentence);
