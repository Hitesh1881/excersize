// Given an array of objects representing students:
// let students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 78 },
// ];
// Use the `forEach` method to log each student's name and grade to the console.



let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
];

students.forEach(function (student) {
    console.log(`Name: ${student.name},Grade: ${student.grade}`);
});