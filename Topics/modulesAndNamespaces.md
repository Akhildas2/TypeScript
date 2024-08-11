# Modules and Namespaces

## 1.Modules

### 1.1 Import and Export Syntax

Modules in TypeScript allow you to organize your code by exporting and importing parts of your code.

#### Exporting

You can export variables, functions, or classes using the export keyword.

```typescript
// math.ts
export const PI = 3.14;

export function add(x: number, y: number): number {
  return x + y;
}
```

#### Importing

You can import the exported members into another file using the import keyword.

```typescript
// main.ts
import { PI, add } from "./math";

console.log(PI); // 3.14
console.log(add(2, 3)); // 5
```

### 1.2 Default Exports

A module can have a single default export, which can be imported without curly braces.

```typescript
// logger.ts
export default function log(message: string): void {
  console.log(message);
}
```

You can import the default export with any name:

```typescript
// main.ts
import log from "./logger";

log("Hello, World!"); // Outputs: Hello, World!
```

### 1.3 Re-exporting

You can re-export members from another module.

```typescript
// reexports.ts
export { PI, add } from "./math";
```

Now, import from the re-exported module:

```typescript
// main.ts
import { PI, add } from "./reexports";

console.log(PI); // 3.14
console.log(add(2, 3)); // 5
```

## 2.Namespaces

### 2.1 Defining Namespaces

Namespaces are used to group related code together.

```typescript
namespace MathUtils {
  export function square(x: number): number {
    return x * x;
  }
}

console.log(MathUtils.square(5)); // 25
```

### 2.2 Nested Namespaces

Namespaces can be nested within other namespaces.

```typescript
namespace Geometry {
  export namespace Area {
    export function circle(radius: number): number {
      return Math.PI * radius * radius;
    }
  }
}

console.log(Geometry.Area.circle(5)); // 78.5398
```

### 2.3 Merging Namespaces

You can merge two namespaces with the same name.

```typescript
namespace Animals {
  export class Dog {
    constructor(public name: string) {}
  }
}

namespace Animals {
  export class Cat {
    constructor(public name: string) {}
  }
}

const dog = new Animals.Dog("Rex");
const cat = new Animals.Cat("Mittens");

console.log(dog.name); // Rex
console.log(cat.name); // Mittens
```
