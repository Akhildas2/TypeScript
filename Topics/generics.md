# Generics

Generics provide a way to create reusable and flexible components that can work with a variety of types rather than a single one. They allow you to create a function, class, or interface that can work with any type while still providing type safety.

## 1.Why Use Generics?

- **Reusability**: Write code that works with any data type.
- **Type Safety**: Catch errors at compile time rather than runtime.
- **Flexibility**: Easily adapt the code to different types without rewriting it.

## 2.Introduction to Generics

Generics are a powerful feature in TypeScript that allows you to create components that can work with any type. They are especially useful when writing functions, interfaces, and classes that need to work with a variety of types without sacrificing type safety.

## 3.Basic Syntax

Generics are specified by a type variable, often denoted as `<T>`, where `T` is a placeholder for the type that will be provided when the function, class, or interface is used.

## 4.Generic Functions

Generics can be used in functions to create reusable code that works with any data type.

### Example: Generic Function

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage
let output1 = identity<string>("Hello, TypeScript!"); // Explicit type
let output2 = identity(42); // Type inference
```

### Explanation

- `identity<T>`: Defines a generic function with a type variable T.
- `arg: T`: The function takes an argument of type T.
- `return arg;`: The function returns a value of type T.
- When calling the function, you can specify the type explicitly (`identity<string>`) or let TypeScript infer the type.

## 5.Generic Interfaces

You can also create generic interfaces to define the shape of objects that can work with any type.

### Example: Generic Interface

```typescript
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let kvp: KeyValuePair<number, string> = { key: 1, value: "TypeScript" };
```

### Explanation

- `interface KeyValuePair<K, V>`: Defines a generic interface with two type variables `K` and `V`.
- `key: K`: The key property is of type `K`.
- `value: V`: The value property is of type `V`.
- `let kvp`: The interface is used with number as the type for `key` and string as the type for `value`.

## 6.Generic Classes

Classes can also be made generic, allowing them to work with any type.

### Example: Generic Class

```typescript
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

let numberBox = new Box<number>(123);
let stringBox = new Box<string>("TypeScript");
```

### Explanation

- `class Box<T>`: Defines a generic class with a type variable T.
- `content: T`: The class has a property content of type T.
- `getContent(): T`: The class has a method that returns a value of type T.
- `new Box<number>(123)`: The class is instantiated with a number.
- `new Box<string>("TypeScript")`: The class is instantiated with a string.

## 7.Constraints

Sometimes you may want to restrict the types that can be used with a generic. This is done using constraints.

### Example: Generic Constraint

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Hello, TypeScript!"); // OK
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

### Explanation

- `interface Lengthwise`: Defines an interface with a length property.
- `function logLength<T extends Lengthwise>`: The generic function is constrained to types that have a length property.
- `logLength("Hello, TypeScript!")`: Works because strings have a length property.
- `logLength(42)`: Would cause an error because numbers do not have a length property.

## 8.Using Constraints with Generics

Constraints can be further extended to work with complex types, enabling more refined control over what types can be passed to generics.

### Example: Using Constraints with Generics

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "John", age: 25 };
let name = getProperty(person, "name"); // OK
// let invalid = getProperty(person, "invalidKey"); // Error: Argument of type '"invalidKey"' is not assignable to parameter of type '"name" | "age"'.
```

### Explanation

- `function getProperty<T, K extends keyof T>`: The function is constrained to work only with keys of the object type T.
- `key: K`: The key must be a property of the object T.
- `getProperty(person, "name")`: Valid because "name" is a key in person.
- `getProperty(person, "invalidKey")`: Invalid because "invalidKey" is not a key in person.

## 9.Default Generic Types

You can provide default values for generic types, allowing the caller to omit the generic type when invoking the function, class, or interface.

### Example: Default Generic Types

```typescript
function createPair<T = string, U = number>(
  key: T,
  value: U
): KeyValuePair<T, U> {
  return { key, value };
}

let defaultPair = createPair("Key", 123); // Uses defaults
let customPair = createPair<boolean, boolean>(true, false); // Custom types
```

### Explanation

- `function createPair<T = string, U = number>`: Defines a function with default types for T and U.
- `createPair("Key", 123)`: Uses the default types (string and number).
- `createPair<boolean, boolean>(true, false)`: Overrides the default types.
