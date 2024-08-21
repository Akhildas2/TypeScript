// 2. Accept two inputs from the user and output their sum.


import * as readlineSync from 'readline-sync';

const number1: number = parseFloat(readlineSync.question("Enter the first number:"));
const number2: number = parseFloat(readlineSync.question('Enter the second number:'));

const sum: number = number1 + number2;
console.log(`The sum of ${number1} and ${number2} is ${sum}`);
