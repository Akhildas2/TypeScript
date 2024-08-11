# Interfaces in TypeScript

## 1.What is an Interface?

An interface in TypeScript is a powerful way to define the shape of an object. It allows you to specify the types of properties and methods that an object must have. Interfaces help in type-checking and ensure that an object adheres to a specific structure.

## 2.Defining Interfaces

### 2.1 Basic Interface Syntax

An interface is defined using the `interface` keyword followed by the name of the interface. The properties and methods are then listed within curly braces `{}`.

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```

## 3.Optional Properties

An interface can have optional properties. These are properties that may or may not be present in the object.

```typescript
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

const car1: Car = {
  brand: "Toyota",
  model: "Camry",
};

const car2: Car = {
  brand: "Honda",
  model: "Civic",
  year: 2022,
};
```

## 4.Readonly Properties

You can mark properties in an interface as `readonly`, preventing them from being modified after the object is created.

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alice",
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user.name = "Alice Doe"; // This is allowed
```

## 5.Extending Interfaces

### 5.1 Interface Inheritance

Interfaces can extend other interfaces. This allows you to create a more specific interface that inherits properties from another.

```typescript
interface Employee {
  employeeId: number;
  department: string;
}

interface Manager extends Employee {
  subordinates: number;
}

const manager: Manager = {
  employeeId: 101,
  department: "Sales",
  subordinates: 5,
};
```

### 5.2 Extending Multiple Interfaces

An interface can extend multiple interfaces, effectively combining the properties of the extended interfaces.

```typescript
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

interface MultifunctionDevice extends Printable, Scannable {}

const device: MultifunctionDevice = {
  print() {
    console.log("Printing...");
  },
  scan() {
    console.log("Scanning...");
  },
};

device.print(); // Output: Printing...
device.scan(); // Output: Scanning...
```

## 6.Implementing Interfaces

### 6.1 Class Implements Interface

A class can implement an interface by using the `implements` keyword. The class must then include the properties and methods defined by the interface.

```typescript
class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const student = new Student("John Doe", 20);
student.greet(); // Output: Hello, my name is John Doe and I am 20 years old.
```

### 6.2 Interface with Function Types

Interfaces can define the type of a function, specifying the parameters and return type.

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source, subString) => {
  return source.includes(subString);
};
```

## 7.Interface vs Type Alias

While interfaces and type aliases can both define the shape of an object, interfaces are generally preferred for defining object shapes, especially when you need to extend them. Type aliases are more flexible and can be used to define union types, primitive types, etc.

### Interface

```typescript
interface Dog {
  breed: string;
  bark(): void;
}
```

### Type Alias

```typescript
type Dog = {
  breed: string;
  bark(): void;
};
```

## 8.Indexable Types

Interfaces can be used to define the shape of objects that can be indexed by a specific type.

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Hello", "World"];
console.log(myArray[0]); // Output: Hello
```
