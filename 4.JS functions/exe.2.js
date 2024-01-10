// Create a function called `calculateArea` that takes the radius of a circle as a parameter and returns the area of the circle. Use the formula `area = π * r^2`.


function calculateArea(radius){
    const pi = Math.PI;
    const area = pi * Math.pow(radius,2);
    return area;
}

const radius = 5;
const circleArea = calculateArea(radius);
console.log(`The area of the circle with radius ${radius} is: ${circleArea}`);