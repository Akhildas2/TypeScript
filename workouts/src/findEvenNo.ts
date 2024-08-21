// 11.Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that array
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 11, 20, 34, 50, 33
// Output: Number of even numbers in the given array is 3


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

let evenCount: number = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenCount++;
    }
}

console.log(`Number of even numbers in the given array is ${evenCount}`);
