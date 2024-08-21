// 7. Write a program to print the multiplication table of given numbers.
// a.Accept an input from the user and display its multiplication table

import * as readlineSync from 'readline-sync';


const getNumberInput = (prompt: string): number => {
    return parseInt(readlineSync.question(prompt), 10);
}

const number: number = getNumberInput('Enter a number to print its multiplication table:');

console.log(`Multiplication table for ${number}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}