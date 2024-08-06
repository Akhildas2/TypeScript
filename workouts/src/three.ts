// 3. Write a program to find the simple interest.
// a.Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

import * as readlineSync from 'readline-sync';

const getNumberInput = (prompt: string): number => {
    return parseFloat(readlineSync.question(prompt));
}

const principal: number = getNumberInput('Enter the principal amount (p):');
const rate: number = getNumberInput('Enter the interest rate (R):');
const years: number = getNumberInput('Enter the number of years(n):');


const simpleInterest: number = (principal * rate * years) / 100;
console.log(`The simple interest is ${simpleInterest}`);
