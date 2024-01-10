// Create a function called `sortByGrade` that takes an array of student objects as a parameter. Each student object has a `name` and a `grade`.
//  Use the `sort` method to sort the students based on their grades in descending order. Log the sorted array.


function sortByGrade(students) {
    students.sort((a, b) => b.grade - a.grade);
  
    console.log(students);
  }
  
  let students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 95 },
  ];
  
  sortByGrade(students);
  