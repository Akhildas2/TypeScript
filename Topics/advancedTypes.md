# Advanced Types

## 1. Intersection Types

Intersection types allow you to combine multiple types into one. This means that an intersection type will have all the properties of the constituent types.

**Example:**

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  role: string;
}

type EmployeeDetails = Person & Employee;

const emp: EmployeeDetails = {
  name: "John Doe",
  age: 30,
  employeeId: 1234,
  role: "Developer",
};
```

## 2. Union Types

Union types allow a value to be of one of several types. It's useful when a variable can hold values of different types.

**Example:**

```typescript
type Status = "success" | "error" | "loading";

function printStatus(status: Status) {
  console.log(status);
}

printStatus("success"); // valid
printStatus("error"); // valid
printStatus("loading"); // valid
// printStatus("done");  // Error: Argument of type '"done"' is not assignable to parameter of type 'Status'.
```

## 3. Type Aliases

Type aliases allow you to create a new name for a type. They are useful for simplifying complex types and making your code more readable.

**Example:**

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber;

value = "Hello"; // valid
value = 42; // valid
// value = true;  // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
```

## 4. Type Guards and Differentiating Types

Type guards are used to narrow down the type of a variable within a conditional block. TypeScript uses these guards to infer a more specific type.

**Example:**

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(value: string | number) {
  if (isString(value)) {
    console.log(`String: ${value.toUpperCase()}`);
  } else {
    console.log(`Number: ${value.toFixed(2)}`);
  }
}

printValue("Hello"); // Output: String: HELLO
printValue(42); // Output: Number: 42.00
```

## 5. Mapped Types

Mapped types allow you to create new types by transforming properties of an existing type. This is often used for creating types with modified or conditional properties.

**Example:**

```typescript
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const readonlyPerson: ReadonlyPerson = {
  name: "John Doe",
  age: 30,
};

// readonlyPerson.age = 31;  // Error: Cannot assign to 'age' because it is a read-only property.
```

## 6. Conditional Types

Conditional types allow you to choose one of two possible types based on a condition, similar to a ternary operator in JavaScript.

**Example:**

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
```

## 7. Index Types

Index types allow you to retrieve the type of a property from an object type using the `keyof` keyword.

**Example:**

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // "Alice"
```

## 8. Utility Types

TypeScript provides several built-in utility types to facilitate common type transformations.

**Example:**

- `Partial<T>`: Makes all properties in T optional.

```typescript
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = { name: "John" }; // valid
```

- `Required<T>`: Makes all properties in T required.

```typescript
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;

const requiredPerson: RequiredPerson = { name: "John", age: 30 }; // valid
```

- `Readonly<T>`: Makes all properties in T read-only.

```typescript
type ReadonlyPerson = Readonly<Person>;

const readonlyPerson: ReadonlyPerson = { name: "John", age: 30 };
// readonlyPerson.age = 31;  // Error: Cannot assign to 'age' because it is a read-only property.
```

- `Pick<T, K>`: Constructs a type by picking a set of properties K from T.

```typescript
type NameOnly = Pick<Person, "name">;

const nameOnly: NameOnly = { name: "John" };
```

- `Omit<T, K>`: Constructs a type by excluding a set of properties K from T.

```typescript
type PersonWithoutAge = Omit<Person, "age">;

const personWithoutAge: PersonWithoutAge = { name: "John" };
```
