// Given the object:
// let person = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland"
// };
// Use a `for...in` loop to log each property and its value to the console.


let person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};

for (let property in person) {
    console.log(`${property}:${person[property]}`);
}