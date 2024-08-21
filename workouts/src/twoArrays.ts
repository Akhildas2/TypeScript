// 10. Write a program to interchange the values of two arrays.
// a.Program should accept an array from the user, swap the values of two arrays and display it on the console
// Eg: Output: Enter the size of arrays
// Input: 5
// Output: Enter the values of Array 1
// Input: 10, 20, 30, 40, 50
// Output: Enter the values of Array 2
// Input: 15, 25, 35, 45, 55
// Output: Arrays after swapping:
// Array1: 15, 25, 35, 45, 55
// Array2: 10, 20, 30, 40, 50


import * as readlineSync from 'readline-sync';

const getArrayInput = (prompt: string, size: number): number[] => {
    console.log(prompt);
    let array: number[] = [];
    for (let i = 0; i < size; i++) {
        array.push(parseInt(readlineSync.question(`Enter value ${i + 1}: `), 10));
    }
    return array;
};

const size: number = parseInt(readlineSync.question('Enter the size of arrays: '), 10);

let array1: number[] = getArrayInput('Enter the values of Array 1:', size);

// Get the values of Array 2 from the user
let array2: number[] = getArrayInput('Enter the values of Array 2:', size);

let temp = array1;
array1 = array2;
array2 = temp;

console.log('Arrays after swapping:');
console.log('Array 1:', array1.join(', '));
console.log('Array 2:', array2.join(', '));
