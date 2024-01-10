// Write a function called `countProperties` that takes an object as a parameter and uses a `for...in` loop to count and log the number of properties in the object.


function countProperties(object) {
    let count = 0;

    for (let property in object) {
        if (object.hasOwnProperty(property))
            count++;
    }
    console.log(`Number of property:${count}`);
}

let student = {
    name: "Sunny",
    age: 29,
    grade: 82
};

countProperties(student);