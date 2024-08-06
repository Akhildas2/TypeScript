// 4.Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
// a.Program should accept an input from the user and output a message as “Passed” or “Failed”


import * as readlineSync from 'readline-sync';

const getNumberInput = (prompt: string): number => {
    return parseFloat(readlineSync.question(prompt))
}

const mark: number = getNumberInput('Enter the mark:');

const passMark: number = 50;
const result: string = mark >= passMark ? 'Passed' : 'Failed';

console.log(`Result :${result}`);
