# Functions

## 1.Basic Function

A function in TypeScript can be defined using the `function` keyword. The basic syntax is:

### Syntax

```typescript
function functionName(parameters: parameterType): returnType {
  // Function body
  return value;
}
```

### Example

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## 2.Arrow Functions

Arrow functions provide a shorter syntax for defining functions and do not have their own `this` context.

### Example

```typescript
const multiply = (x: number, y: number): number => x * y;
```

## 3.Anonymous Functions

Anonymous functions are functions without a name and are often used as arguments to other functions or as callback functions.

### Example

```typescript
const divide = function (x: number, y: number): number {
  return x / y;
};
```

## 4.Method Functions

Functions can also be defined as methods within a class or object.

### Example

```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
```

## 5.Function Types

You can define function types using type aliases or interfaces. This is useful for specifying the shape of a function.

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
```

## 6.Inline Function Types

You can specify the type of a function inline within another function or object.

```typescript
const process: (input: string) => void = (data) => {
  console.log(data);
};
```

## 7.Typing Function Parameters and Return Types

Parameters in TypeScript functions have types. You define the type of each parameter in the function signature. The return type specifies what type of value the function will return. If a function does not return a value, its return type should be `void`.

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function multiply(x: number, y: number): number {
  return x * y;
}
```

## 8. Optional and Default Parameters

### 1.Optional Parameters

You can make parameters optional by appending a ? to the parameter name. Optional parameters must be placed at the end of the parameter list.

```typescript
function greet(name: string, salutation?: string): void {
  if (salutation) {
    console.log(`${salutation}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
```

### 2.Default Parameters

You can provide default values for parameters. If the argument is not supplied, the default value is used.'

```typescript
function greet(name: string, salutation: string = "Hello"): void {
  console.log(`${salutation}, ${name}!`);
}
```

## 9. Rest Parameters

Rest parameters allow you to pass a variable number of arguments to a function. They are represented by three dots (`...`) followed by the parameter name.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
```

## 10. Function Overloads

Function overloading allows you to define multiple signatures for a function, enabling it to handle different types or numbers of arguments.

### 1.Defining Multiple Function Signatures

You define multiple function signatures for the same function, specifying the possible parameter types and return types.

```typescript
function greet(person: string): string;
function greet(person: string, age: number): string;
```

### 2.Implementing Function Overloads

The actual implementation of the function must handle the different signatures.

```typescript
function greet(person: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${person}. You are ${age} years old.`;
  } else {
    return `Hello, ${person}.`;
  }
}
```
