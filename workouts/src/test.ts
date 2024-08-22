
// If conditional
let num: number = 15;
if (num < 10) {
    console.log("lessthan 10");
} else {
    console.log("greaterthan 10");
}


// For loop
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

// Do while 
let number: number = 0;
do {
    console.log(number);
    number++
} while (number < 5)

// Function
function greet(name: string): string {
    return `hello, ${name}`
}
console.log(greet("akhil"));

let add = function (a: number, b: number): Number {
    return a + b
}
console.log(add(5, 7));

// Create objects
let person: { name: string; age: number } = {
    name: "akhil",
    age: 23
}
console.log(person.name);

// Class
class Personal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hello ${name} ,${age}");

    }

}

let personalDeatil = new Personal("Akhil", 12)
console.log(personalDeatil);


// Interface

interface Iperson {
    name: string;
    age: number;
}

let personD: Iperson = {
    name: "akhil",
    age: 23,
}
console.log(personD.name);

// Rest operator

function sum(...num: number[]): number {
    return num.reduce((acc, val) => acc + val, 0)
}
console.log(sum(1, 2, 3, 4));

// Optional Chaining

interface Person {
    name: string;
    address?: {
        street?: string;
    };
}

let na: Person = { name: "akhil" };
console.log(na.address?.street); // undefined


// Async 

const api = ' https://jsonplaceholder.typicode.com/posts'
async function apiCall(apiUrl: string) {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Data:', data);
    } catch (error) {
        console.error('Unknown Error:', error);
    }

}
apiCall(api);


// Generics 

function identity<T>(value: T): T {
    return value;
}

let nums = identity<number>(10);
let str = identity<string>("Hello");

console.log(num); // 10
console.log(str); // Hello


// Default Parameters

function greeting(name: string = "akhil"): string {
    return `hello my name ${name}`
}
console.log(greeting()); // hello my name akhil
console.log(greeting("aswin")); // hello my name aswin 


// Decorator 

function logger(target: Function): void {
    console.log("Class has been logged:", target);
}

@logger
class MyClass {
    constructor(public name: string) {
        console.log(`Hello, ${this.name}`);
    }
}

const myInstance = new MyClass("Akhil");
console.log(myInstance);

// Output:
// Class has been logged: [class MyClass]
// Hello, Akhil


// Object 

const newNestedObject = {
    data: [
        { name: "Item A", count: 12, stock: { property: 'stock', total: 50 } },
        { name: "Item B", count: 18, stock: { property: 'stock', total: 80 } },
        { name: "Item C", count: 22, stock: { property: 'stock', total: 60 } },
        { name: "Item D", count: 27, stock: { property: 'stock', total: 40 } }
    ]
};

// Calculate the sum of total values
const sumOfTotals = newNestedObject.data.reduce((sum, item) => sum + item.stock.total, 0);

console.log(sumOfTotals); // Output: 230

