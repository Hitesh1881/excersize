// Given the object:

// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
// };
// Use a `for...in` loop to log each key and its corresponding value to the console.


let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2020,
};

for (let key in car) {
    console.log(`${key}:${car[key]}`);
}