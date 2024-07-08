
function getStudentGrade() {
    let marks = prompt("Please enter the student's marks (0-100):");
    marks = Number(marks);

    if (isNaN(marks) || marks < 1 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }


    const gradeDisplay = document.getElementById('gradeDisplay');
    gradeDisplay.textContent = "The grade is: " + grade;
    

    gradeDisplay.className = 'grade';

    gradeDisplay.classList.add(grade);
}
