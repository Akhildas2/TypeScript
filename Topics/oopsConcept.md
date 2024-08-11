# Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure and manage code. TypeScript, as a superset of JavaScript, supports OOP principles like classes, inheritance, polymorphism, encapsulation, and abstraction.

## 1. Classes

A class is a blueprint for creating objects. It defines properties and methods that the objects created from the class will have.

## 2.Inheritance

Inheritance allows a class to inherit properties and methods from another class. This promotes code reusability and establishes a relationship between classes.

### 2.1 Syntax

```typescript
class SubClass extends SuperClass {
  // Additional properties and methods
}
```

### 2.2 Example

```typescript
class Animal {
  sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  makeSound(): string {
    return this.sound;
  }
}

class Dog extends Animal {
  constructor() {
    super("Woof");
  }
}

const dog = new Dog();
console.log(dog.makeSound()); // Output: Woof
```

## 3. Encapsulation

Encapsulation involves bundling data (properties) and methods that operate on the data into a single unit (class). It also involves restricting direct access to some of an object's components.

### 3.1 Syntax

```typescript
class EncapsulatedClass {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  public revealSecret(): string {
    return this.secret;
  }
}
```

### 3.2 Example

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
```

## 4. Polymorphism

Polymorphism allows methods to have the same name but behave differently based on the object that is calling them. It enables objects to be treated as instances of their parent class rather than their actual class.

### 4.1 Syntax

```typescript
class BaseClass {
  method(): void {
    // base implementation
  }
}

class DerivedClass extends BaseClass {
  method(): void {
    // derived implementation
  }
}
```

### 4.2 Example

```typescript
class Animal {
  makeSound(): string {
    return "Some generic sound";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

const animals: Animal[] = [new Cat(), new Dog()];

animals.forEach((animal) => console.log(animal.makeSound()));
// Output:
// Meow
// Woof
```

## 5. Abstraction

Abstraction involves hiding the complex implementation details of a system and exposing only the necessary parts. In TypeScript, abstraction can be achieved using abstract classes and methods.

### 5.1 Syntax

```typescript
abstract class AbstractClass {
  abstract abstractMethod(): void;

  concreteMethod(): void {
    // implementation
  }
}
```

### 5.2 Example

```typescript
abstract class Shape {
  abstract getArea(): number;

  describe(): string {
    return `This shape has an area of ${this.getArea()} square units.`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.describe()); // Output: This shape has an area of 78.53981633974483 square units.
```
