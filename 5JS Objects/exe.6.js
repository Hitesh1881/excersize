// Create a function called `countProperties` that takes an object as a parameter and returns the number of properties in the object.


function countProperties(obj){
    return Object.keys(obj).length;
}

let student = {
    name:"Rohan",
    age:28,
    grade:"A+",
    };

const numberOfProperties = countProperties(student);

console.log(`Number of properties in the object: ${numberOfProperties}`);