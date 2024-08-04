# Type Assertions and Type Guards in TypeScript

## Type Assertions

Type assertions are a way to inform the TypeScript compiler about the type of a value. They allow you to override the compiler's inferred type when you know better about the type of a value. Note that type assertions do not perform any runtime checks or type conversions.

### 1.`as` Syntax

The `as` syntax is a popular way to perform type assertions in TypeScript. It uses the `as` keyword followed by the target type.

#### Syntax

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

#### Example

```typescript
let someValue: any = "TypeScript";
let strLength: number = (someValue as string).length;
console.log(strLength); // Outputs: 10
```

### 2.`Angle-bracket` Syntax

The `angle-bracket` syntax is another way to perform type assertions. It is more common in JSX-free TypeScript code, as JSX conflicts with `angle brackets`.

#### Syntax

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

#### Example

```typescript
let someValue: any = "TypeScript";
let strLength: number = (<string>someValue).length;
console.log(strLength); // Outputs: 10
```

### 3.Advantages

- **Flexibility**: Lets you specify the type when TypeScript can’t figure it out.
- **Simplicity**: Makes code simpler when you know the type but TypeScript doesn’t.
- **Works with `any`**: Useful when dealing with `any` type to specify a more precise type.

### 4.Disadvantages

- **No Runtime Checks**: Does not check types at runtime, only at compile time.
- **Risk of Errors**: Can lead to runtime errors if the assertion is wrong.
- **Less Safety**: Can reduce the safety TypeScript provides if used too much.

## Type Guards

Type guards are techniques used to determine the type of a variable at runtime. They allow you to narrow down the type within a conditional block, enabling more type-safe operations.

### 1.`typeof`

The `typeof` operator is used to check the type of a primitive value. It returns a string representing the type of the operand.

#### Syntax

```typescript
if (typeof variable === "type") {
  // variable is of type
}
```

#### Example

```typescript
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, but got ${typeof padding}`);
}
```

### 2.`instanceof`

The `instanceof` operator is used to check whether an object is an instance of a particular class or constructor function.

#### Syntax

```typescript
if (variable instanceof Constructor) {
  // variable is an instance of Constructor
}
```

#### Example

```typescript
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Fish {
  swim() {
    console.log("Swimming");
  }
}

type Pet = Bird | Fish;

function move(pet: Pet) {
  if (pet instanceof Bird) {
    pet.fly();
  } else if (pet instanceof Fish) {
    pet.swim();
  }
}
```

### 3.`User-defined Type Guards`

`User-defined type guards` allow you to create custom type-checking functions. These functions use type predicates to provide type information to the TypeScript compiler.

#### Syntax

```typescript
function isType(variable: any): variable is Type {
  // return true if variable is of Type
}
```

#### Example

```typescript
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function isCircle(shape: Shape): shape is { kind: "circle"; radius: number } {
  return shape.kind === "circle";
}

function getArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius! * shape.radius!;
  } else {
    return shape.sideLength! * shape.sideLength!;
  }
}

let circle: Shape = { kind: "circle", radius: 5 };
let square: Shape = { kind: "square", sideLength: 10 };

console.log(getArea(circle)); // 78.53981633974483
console.log(getArea(square)); // 100
```

### 4.Advantages

- **Runtime Checking**: Checks types while the code is running, ensuring safer code.
- **Better Safety**: Narrows down types for safer operations.
- **Custom Checks**: Allows you to create custom checks for specific types.

### 5.Disadvantages

- **More Complex**: Can make code more complex, especially with custom checks.
- **Performance Cost**: May add a small performance overhead.
- **Learning Curve**: Requires understanding of type predicates and custom guards.
