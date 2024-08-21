// 12. Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 20, 10, 50, 30, 40
// Output: Sorted array:
// 50, 40, 30, 20, 10


import * as readlineSync from 'readline-sync';

const getArrayInput = (prompt: string, size: number): number[] => {
    console.log(prompt);
    let array: number[] = [];
    for (let i = 0; i < size; i++) {
        array.push(parseInt(readlineSync.question(`Enter value ${i + 1}: `), 10));
    }
    return array;
};

const size: number = parseInt(readlineSync.question('Enter the size of the array: '), 10);

const array: number[] = getArrayInput('Enter the values of the array:', size);

array.sort((a, b) => b - a);

console.log('Sorted array in descending order:');
console.log(array.join(', '));
