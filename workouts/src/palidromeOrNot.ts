// 13. Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not
// Eg: Output: Enter a string
// Input: MALAYALAM
// Output: Entered string is a palindrome

import * as readlineSync from 'readline-sync';

const isPalindrome = (str: string): boolean => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const inputString: string = readlineSync.question('Enter a string: ');

if (isPalindrome(inputString)) {
    console.log('Entered string is a palindrome');
} else {
    console.log('Entered string is not a palindrome');
}
