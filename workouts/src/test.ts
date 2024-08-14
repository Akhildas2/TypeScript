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

// Classes: Blueprints for creating objects.
// Objects: Instances of classes.
// Inheritance: Mechanism to create a new class from an existing class.
// Polymorphism: Ability to use a common interface for different underlying forms (data types).
// Encapsulation: Bundling data and methods into a single unit (class) and restricting access to some of the object's components.
// Abstraction: Hiding complex implementation details and showing only the necessary features.

// Method overloading
// that allows a class to have multiple methods with the same name but different parameter types or numbers. 
class Shape {
    area(side: number): number;
    area(length: number, width: number): number;
    area(sideorLength: number, width?: number): number {
        if (width === undefined) {
            return sideorLength * sideorLength
        } else {
            return sideorLength * width;
        }
    }
}

const shape = new Shape();
const squareArea = shape.area(5)

//inheritance
class Animal {
    constructor(public name: string) { }

    makeSound(): void {
        console.log(`${this.name} makes a sound`);

    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    makeSound(): void {
        console.log(`${this.name} sound like booo`);
    }
}

const animal = new Animal("cat")
animal.makeSound()
const dog = new Dog("booby")
dog.makeSound()

//without extend (Polymorphism)
interface Speaker {
    name: string;
    speak(): void;

}

class GeneralSpeaker implements Speaker {
    constructor(public name: string) { }
    speak(): void {
        console.log(`${this.name} speaks Malayalam.`);

    }
}

class EnglishSpeaker implements Speaker {
    constructor(public name: string, private delegateSpeaker: Speaker) { }
    speak(): void {
        console.log(`${this.name} speaks English.`);

    }
    delegate(): void {
        this.delegateSpeaker.speak();
    }
}
const malayalamSpeaker = new GeneralSpeaker("Akhil");
malayalamSpeaker.speak();
const englishSpeaker = new EnglishSpeaker("Don", new GeneralSpeaker("Boo"));
englishSpeaker.speak();
englishSpeaker.delegate();

