# Basic Types in TypeScript

## 1.Primitive Types

Primitive types represent the most basic types of data.

1. **Boolean**

   - Represents true/false values.

   ```typescript
   let isDone: boolean = false;
   ```

2. **Number**

   - Represents both integer and floating point numbers.

   ```typescript
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
   ```

3. **String**

   - Represents text data.

   ```typescript
   let color: string = "blue";
   color = "red";
   ```

4. **Null and Undefined**

   - Represents the absence of value.

   ```typescript
   let u: undefined = undefined;
   let n: null = null;
   ```

## 2.Object Types

Object types represent non-primitive types.

1. **Array**

   - Represents a collection of elements.

   ```typescript
   let list: number[] = [1, 2, 3];
   let list: Array<number> = [1, 2, 3];
   ```

2. **Tuple**

   - Represents an array with a fixed number of elements whose types are known.

   ```typescript
   let x: [string, number];
   x = ["hello", 10];
   ```

3. **Enum**

   - Represents a collection of related values.

   ```typescript
   enum Color {
     Red,
     Green,
     Blue,
   }
   let c: Color = Color.Green;
   ```

4. **Object**

   - Represents non-primitive types.

   ```typescript
   declare function create(o: object | null): void;
   create({ prop: 0 }); // OK
   create(null); // OK
   ```

## 3.Top Types

Top types are types that can hold any value.

1. **Any**

   - Can hold any type of value.

   ```typescript
   let notSure: any = 4;
   notSure = "maybe a string instead";
   notSure = false;
   ```

2. **Unknown**

   - Similar to `any`, but safer as it requires type checking before performing operations.

   ```typescript
   let value: unknown = 4;
   value = "could be a string instead";
   ```

## 4.Bottom Types

Bottom types represent types that never occur.

1. **Never**

   - Represents values that never occur.

   ```typescript
   function error(message: string): never {
     throw new Error(message);
   }
   ```

## 5.Other Types

1. **Void**

   - Represents the absence of any type, commonly used as the return type of functions that do not return a value.

   ```typescript
   function warnUser(): void {
     console.log("This is my warning message");
   }
   ```
