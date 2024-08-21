# TypeScript Guide

Welcome to the TypeScript Guide! This README will help you understand the fundamentals of TypeScript, including advanced topics, types, classes, functions, generics, and more. Code examples are provided for better understanding.

## Table of Contents

### Topics

1. Introduction
2. Basic Types
3. Advanced Types
4. Classes and Objects
5. Functions
6. Generics
7. Interfaces
8. Decorators
9. Modules and Namespaces
10. OOP Concepts
11. Type Assertions and Guards

### Workouts

1. Descending Order
2. Display Characters
3. Find Even Numbers
4. Multiplication Table
5. oops
6. Palindrome Or Not
7. Pass Or Fail
8. Pattern
9. Show Grade
10. Simple Interest
11. Sum
12. Sum of Odd Numbers
13. Switch Case
14. Test
15. Two Arrays

## Installation

To get started with TypeScript, follow these steps to install and set up your environment:

1. **Install Node.js**: Make sure you have Node.js installed on your machine.

2. **Install TypeScript**: Install TypeScript globally using npm:

   ```bash
   npm install -g typescript
   ```

3. **Initialize TypeScript Project**:Create a `tsconfig.json` file for TypeScript configuration:

   ```bash
   tsc --init
   ```

4. **Install Project Dependencies (if applicable)**: Install any additional dependencies using npm:

```bash
npm install
```

## Running

To compile and run TypeScript code, follow these steps:

1. **Compile TypeScript**:Use the TypeScript compiler to transpile `.ts` files to `.js`:

```bash
npx tsc
```

This will generate JavaScript files based on your TypeScript files according to the configuration in tsconfig.json.

2. **Run JavaScript Code:**: Use Node.js to run the compiled JavaScript code:

```bash
node path/to/compiled-file.js
```

Replace `path/to/compiled-file`.js with the path to your compiled JavaScript file. If you have output files in a `dist` directory, you might use:

```bash
node dist/oops.js
```
