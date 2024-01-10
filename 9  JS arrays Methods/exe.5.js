// Given the array of objects:

// let students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 78 },
// ];

// Use the `forEach` method to log the names of students who scored above 80.


let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
];

students.forEach(student=>{
    if(student.grade>80){
        console.log(student.name+"Score above 80");
    }
})