// Given the array of mixed data types:
// let mixedArray = [42, "apple", true, "banana", 7, "orange", false];

// Use the `forEach` method to log only the strings to the console.


    let mixedArray = [42, "apple", true, "banana", 7, "orange", false];


    mixedArray.forEach(function(element){
        if(typeof element === "string"){
            console.log(element);
        }
    })