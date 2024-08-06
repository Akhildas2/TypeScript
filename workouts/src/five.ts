// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// a.Program should accept an input from the user and display their grade as follows


import * as readlineSync from 'readline-sync';


const getNumberInput = (prompt:string) : number =>{
    return parseFloat(readlineSync.question(prompt));
}

const totalMark : number = getNumberInput('Enter the total mark percentage:');

let grade:string;
 
if (totalMark > 90) {
    grade = 'A';
} else if (totalMark >= 80) {
    grade = 'B';
} else if (totalMark >= 70) {
    grade = 'C';
} else if (totalMark >= 60) {
    grade = 'D';
} else if (totalMark >= 50) {
    grade = 'E';
} else {
    grade = 'Failed';
}

console.log(`Grade : ${grade}`);
