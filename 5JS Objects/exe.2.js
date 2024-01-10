// Create a function called `printObject` that takes an object as a parameter and logs each key-value pair in the object to the console.


function printObject(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}:${obj[key]}`);
        }
    }
}

const car = {
    make:"Mahindra",
    model:"Scorpio",
    year:"2023",
    colour:"Black"
};

printObject(car);