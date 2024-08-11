# Classes and Objects

## 1. Class

### 1.1 Definition

A **class** is a blueprint for creating objects. It encapsulates data (properties) and functions (methods) that work on the data. Classes support OOP principles like inheritance, encapsulation, and polymorphism.

### 1.2 Syntax

```typescript
class ClassName {
  // Properties
  propertyName: type;

  // Constructor
  constructor(param1: type, param2: type) {
    this.propertyName = param1;
  }

  // Method
  methodName(): returnType {
    // Method body
  }
}
```

### 1.3 Example

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
```

### 1.4 Key Points

- **Fields**: Variables that hold the data of the class, declared inside the class but outside the methods.
- **Constructor**: A special method called when an object is instantiated. It initializes the object's properties.
- **Methods**: Functions that operate on the data (fields) of the class.
- **Access Modifiers**: Control the visibility of class members:
  - `public`: Accessible from anywhere.
  - `private`: Accessible only within the class.
  - `protected`: Accessible within the class and its subclasses.

## 2. Objects

### 2.1 Definition

An object is an instance of a class. It is created using the new keyword followed by the class name and can access the properties and methods defined in the class.

### 2.2 Syntax

```typescript
const objectName = new ClassName(arguments);
```

### 2.3 Example

```typescript
const person1 = new Person("Bob", 25);
console.log(person1.greet()); // Output: Hello, my name is Bob and I am 25 years old.
```

### 2.4 Key Points

**Instantiation**: The process of creating an object from a class using the new keyword.
**Properties**: The data held by the object, defined by the fields in the class.
**Methods**: The actions that can be performed by the object, defined by the methods in the class.
**Accessing Members**: Use the dot (.) notation to access properties and methods of the object.

## 3. Access Modifiers

### 3.1 Definition

TypeScript supports access modifiers to control the visibility of class members. The three access modifiers are `public`, `private`, and `protected`.

- `public`: Accessible from anywhere.
- `private`: Accessible only within the class.
- `protected`: Accessible within the class and its subclasses.

### 3.2 Example

```typescript
class Car {
  private brand: string;
  private model: string;
  private year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getCarInfo(): string {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

const myCar = new Car("Audi", "A4", 2018);
myCar.setYear(2022);
console.log(myCar.getCarInfo()); // Output: Audi A4 (2022)
```
