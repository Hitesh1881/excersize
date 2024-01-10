// Create a function called `sortByLength` that takes an array of strings as a parameter and uses the `sort` method to sort the strings based on their length in ascending order. Log the sorted array.


function sortByLength(strings) {
    strings.sort((a, b) => a.length - b.length);

    console.log(strings);
}

let fruits = ["banana", "apple", "orange", "grape", "kiwi"];

sortByLength(fruits);
