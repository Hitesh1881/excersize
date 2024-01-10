// Create a function called `reverseObject` that takes an object as a parameter and uses a `for...in` loop to reverse
//  the key-value pairs in the object. Log the modified object to the console.


function reverseObject(object) {
    let reversedObject = {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            reversedObject[object[key]] = key;
        }
    }
    console.log("Reversed Object :", reversedObject);
}

let ooo = {
    name: "Jenith",
    age: 69,
    city: "surat"
};

reverseObject(ooo);