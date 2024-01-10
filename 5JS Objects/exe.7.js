// Create an object representing a book with properties such as `title`, `author`, and `pages`. Write a function called `bookInfo` that takes
//  a book object as a parameter and logs a string with the book information to the console.


const book = {
    title:"ABC",
    author:"xyz",
    pages:158
}

function bookInfo(bookObject){
    console.log(`Title:${bookObject.title}`);
    console.log(`Author:${bookObject.author}`);
    console.log(`Pages:${bookObject.pages}`);
}

bookInfo(book);