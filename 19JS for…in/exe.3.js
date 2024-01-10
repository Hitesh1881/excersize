// Given an object representing a student's grades:

// let grades = {
//   math: 90,
//   science: 85,
//   history: 88,
// };
// Use a `for...in` loop to calculate and log the average grade.


let grades = {
    math: 90,
    science: 85,
    history: 88,
};

let totalGrades = 0;
let numberOfSubjects = 0;

for (let subject in grades) {
    totalGrades += grades[subject];
    numberOfSubjects++;
}

if (numberOfSubjects > 0) {
    let averageGrade = totalGrades / numberOfSubjects;
    console.log("Average Grade:", averageGrade);
} else {
    console.log("No grades available.");
}