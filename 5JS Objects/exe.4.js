// Create a function called `calculateBMI` that takes an object representing a person with properties `weight` in kilograms and `height` in metres.
//  Calculate the BMI (Body Mass Index) using the formula `BMI = weight / (height * height)` and 
// add a new property `bmi` to the object. Log the modified object to the console.


function calculateBMI(person){
    const bmi=person.weight / (person.height*person.height);
    person.bmi=bmi;
}

let person = {
    name:"Hari Om",
    weight:93,  //kg
    height:170,  //cm
    isCEO:true
};

calculateBMI(person);

console.log(person);