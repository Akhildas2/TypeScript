# Decorators

## 1.Introduction to Decorators

Decorators are a special kind of declaration in TypeScript that can be attached to classes, methods, properties, or parameters. They provide a way to add annotations or modify the behavior of the target. Decorators are widely used in frameworks like Angular for dependency injection and metadata reflection.

To enable experimental support for decorators in TypeScript, you need to set `"experimentalDecorators": true` in your `tsconfig.json`.

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## 2.Class Decorators

A class decorator is a function that takes a class constructor as an argument and can modify or replace the class definition.

### Example:

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}
```

In this example, the `sealed` decorator prevents the class and its prototype from being extended.

## 3.Method Decorators

Method decorators are applied to a method of a class and can be used to observe, modify, or replace method definitions.

### Example:

```typescript
function log(
  target: Object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with arguments`, args);
    return method.apply(this, args);
  };
}

class Calculator {
  @log
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
calculator.add(2, 3); // Logs: "Calling add with arguments [2, 3]"
```

Here, the `log` decorator logs the method name and arguments each time the method is called.

## 4.Property Decorators

Property decorators are applied to a property of a class. They can be used to observe or modify the property.

### Example:

```typescript
function readonly(target: Object, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Person {
  @readonly
  name: string = "John";
}

const person = new Person();
person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
```

In this example, the `readonly` decorator makes the name property immutable.

## 5.Parameter Decorators

Parameter decorators are applied to the parameters of a method in a class and can be used to inspect or modify the parameters.

### Example:

```typescript
function logParameter(
  target: Object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(
    `The parameter at index ${parameterIndex} in method ${propertyKey} has been decorated`
  );
}

class User {
  greet(@logParameter message: string): void {
    console.log(message);
  }
}

const user = new User();
user.greet("Hello, world!"); // Logs: "The parameter at index 0 in method greet has been decorated"
```

This decorator logs information about the parameter it is applied to.

## 6.Using Decorators

### Applying Multiple Decorators

You can apply multiple decorators to a single method, property, or parameter. The decorators are applied in reverse order (i.e., the last decorator in the list is applied first).

### Example:

```typescript
function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

const example = new ExampleClass();
example.method();
```

The output will be:

```typescript
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
```

### Metadata Reflection

TypeScript provides metadata reflection through the `reflect-metadata` library. This allows decorators to access type information at runtime.

### Example:

```typescript
import "reflect-metadata";

function logType(target: any, key: string) {
  const type = Reflect.getMetadata("design:type", target, key);
  console.log(`${key} type: ${type.name}`);
}

class Demo {
  @logType
  public attr: string;
}

const demo = new Demo(); // Logs: "attr type: String"
```
