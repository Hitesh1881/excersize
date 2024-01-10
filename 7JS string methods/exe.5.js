// Given the string:

// let email = "user@example.com";

// Use the `split` method to separate the username and domain. Log the results.


let email = "user@example.com";

const [username,domain]= email.split('@');


console.log("Username:",username);
console.log("Domain:",domain);