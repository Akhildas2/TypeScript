// 8. Write a program to find the sum of all the odd numbers for a given limit
// a.Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit

import * as readlineSync from 'readline-sync';

const getNumberInput = (prompt: string): number => {
    return parseInt(readlineSync.question(prompt), 10);
};


const limit: number = getNumberInput('Enter a limit: ');
let sum: number = 0;

for (let i = 1; i <= limit; i += 2) {
    sum += i;
}
console.log(`Sum of odd numbers = ${sum}`);