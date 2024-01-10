// Create a function called `gradeClassifier` that takes a numerical grade as a parameter and logs a message based on the following grading scale:
// - A: 90-100
// - B: 80-89
// - C: 70-79
// - D: 60-69
// - F: 0-59


function gradeClassifier(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log("A: Excellent");
    } else if (grade >= 80 && grade <= 89) {
        console.log("B: Good");
    } else if (grade >= 70 && grade <= 79) {
        console.log("C: Satisfactory");
    } else if (grade >= 60 && grade <= 69) {
        console.log("D: Needs Improvement");
    } else if (grade >= 0 && grade <= 59) {
        console.log("F: Fail");
    } else {
        console.log("Invalid grade. Please enter a grade between 0 and 100.");
    }
}

gradeClassifier(85);
gradeClassifier(45);
gradeClassifier(105);
