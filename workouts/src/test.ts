// if conditional
let num: number = 15;
if (num < 10) {
    console.log("lessthan 10");
} else {
    console.log("greaterthan 10");
}


//for loop
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

//do while 
let number: number = 0;
do {
    console.log(number);
    number++
} while (number < 5)

// function
function greet(name: string): string {
    return `hello, ${name}`
}
console.log(greet("akhil"));

let add = function (a: number, b: number): Number {
    return a + b
}
console.log(add(5, 7));

//create objects
let person: { name: string; age: number } = {
    name: "akhil",
    age: 23
}
console.log(person.name);

//class
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


//interface

interface Iperson {
    name: string;
    age: number;
}

let personD: Iperson = {
    name: "akhil",
    age: 23,
}
console.log(personD.name);

//rest operator

function sum(...num: number[]): number {
    return num.reduce((acc, val) => acc + val, 0)
}
console.log(sum(1, 2, 3, 4));

//Optional Chaining

interface Person {
    name: string;
    address?: {
        street?: string;
    };
}

let na: Person = { name: "akhil" };
console.log(na.address?.street); // undefined
