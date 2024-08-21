
// Classes: Blueprints for creating objects.
// Objects: Instances of classes.
// Inheritance: Mechanism to create a new class from an existing class.
// Polymorphism: Ability to use a common interface for different underlying forms (data types).
// Encapsulation: Bundling data and methods into a single unit (class) and restricting access to some of the object's components.
// Abstraction: Hiding complex implementation details and showing only the necessary features.


//class and object
class Player {
    name?: string;
    health?: number;
    isInvisible?: boolean;
    cursh?: Player;

    greet() {
        console.log(`hello ,my name is ${this.name}`);

    }
}

const mario = new Player()//object
mario.name = "Mario";
mario.health = 10;
mario.isInvisible = true;
console.log(mario);//Player { name: 'Mario', health: 10, isInvisible: true }

const akhil = new Player()
akhil.name = 'akhil';
akhil.health = 2;
akhil.isInvisible = false
console.log(akhil);//Player { name: 'akhil', health: 2, isInvisible: false }


mario.cursh = akhil
mario.greet() // hello ,my name is Mario

console.log(mario.cursh.name)// akhil

akhil.greet() //hello ,my name is akhil



//encapsulation
class Players {
    private health?: number;
    private speed?: number;

    setHealth(health: number) { //set the instance
        if (health < 0) {
            console.log(`you can't set health below 0 `);
            return
        }
        this.health = health
    }
    getHealth() { //retrive them
        return this.health
    }
    setSpeed(speed: number) {
        this.speed = speed;
    }
    getSpeed() {
        return this.speed
    }

}

const arun = new Players();
arun.setHealth(-10);
arun.setSpeed(2);
arun.getHealth()
arun.getSpeed()
console.log(`arun health ${arun.getHealth()}`);
console.log(`arun speed ${arun.getSpeed()}`);

//inheritance

class Animals {

    protected hunger?: number;
    protected health?: number;
    protected coordX?: number;
    protected coordY?: number;
    setCoordX(x: number) {
        this.coordX = x;
    }

    eat() {
        console.log("I'm eating");

    }
    sleep() {
        console.log("I'm sleeping");

    }
    move() {
        console.log("I'm moving");

    }
    makeNoise() {
        console.log("making noise");

    }
}


class Dogs extends Animals {
    makeNoise(): void {
        console.log("booo");

    }
}
class Cat extends Animals {
    makeNoise(): void {
        console.log("mewooo");

    }

    returnToOwner() {
        console.log(`${this.coordX}`);

    }
}

class Rat extends Cat {

    eat(): void {
        console.log("I am eating food");

    }
    sleep(): void {
        super.sleep()//extend
    }
}
const dogs = new Dogs()
dogs.makeNoise()

const cats = new Cat()
cats.makeNoise()
cats.setCoordX(45)
cats.returnToOwner()
const rat = new Rat()
rat.eat()
rat.sleep()


//polymorphism

class Hero {
    health: number;
    hunger: number;
    constructor(health: number, hunger: number) {
        this.health = health;
        this.hunger = hunger;
    }
    move() {
        console.log("I'm moving");

    }
    help() {
        console.log("I'm helping");

    }
    attack() {
        console.log("I'm attacking");

    }
}

class Archer extends Hero {
    arrow: number;
    constructor(health: number, hunger: number, arrow: number) {
        super(health, hunger)
        this.arrow = arrow

    }
    printStats() {
        console.log(`Health: ${this.health}, Hunger: ${this.hunger}, Arrows: ${this.arrow}`);
    }
    attck(): void {
        console.log("I am firing an arrow");

    }
}
class King extends Hero {

    attack(): void {
        console.log("I am swinging the sword");

    }
}

const archer = new Archer(10, 1, -1)
archer.attack()
archer.printStats()
const king = new King(1, 2)
king.attack()

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
