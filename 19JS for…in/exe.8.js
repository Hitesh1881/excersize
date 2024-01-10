// Write a function called `findValue` that takes an object and a value as parameters. Use a `for...in` loop to check
//  if the value exists in the object properties. If found, log the corresponding key.


function findValue(object,value){
   for (let key in object){
    if(object.hasOwnProperty(key)&&Object[key]===value){
        console.log(`corresponding key to value ${value}:${key}`);
        return;
    }
   }
   console.log(`value ${value} not found in the object `);
}

let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2020,
};

findValue(car,"Fortuner");
findValue(car,2020);
findValue(car,"Toyota");