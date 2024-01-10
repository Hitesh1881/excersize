// Given an array of objects representing books:

// let books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
// ];

// Use the `sort` method to sort the books alphabetically by title. Log the sorted array.


let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
];


books.sort((a, b) => a.title.localeCompare(b.title));

console.log(books);