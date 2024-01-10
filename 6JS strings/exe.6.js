// Given a string:

// let email = "user@example.com";

// Use string methods to:
// - Extract the domain (the part after '@').
// - Check if the email contains the substring "example".

let email = "user@example.com";

const atIndex = email.indexOf('@');
const domain = email.slice(atIndex+1);

console.log("Domain:",domain);


const containsExample = email.includes("example");

console.log("contains 'example':",containsExample);