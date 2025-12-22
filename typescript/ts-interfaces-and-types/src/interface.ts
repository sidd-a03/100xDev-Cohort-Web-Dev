interface User {
    name: string;
    age: number;
    address?: {
        city: string;
        country: string;
        pincode: number;
    }
}

let user: User = {
    name: "Achinta",
    age: 22,
    address: {
        city: "Memari",
        country: "India",
        pincode: 713146
    }
}

const isLegal = (user: User): boolean => user.age >= 18;

console.log(isLegal(user));

interface People {
    name: string;
    age: number;
    // greet: () => string;
    greeting?: string;
}

const people: People = {
    name: "achinta",
    age: 22,
    // greet: (): string => `Hello People!`,
    greeting: "Achinta",
}

// console.log(people.greet());

class Boss implements People {

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

const user1 = new Boss('John', 22);

abstract class User1 {
    protected constructor(public name: string) {}
    abstract greet(): string
    hello = (): string => `Hello ${this.name}!`
}

class Employee1 extends User1 {
    constructor(name: string, public age: number) {
        super(name);
    }
    greet() {
        return "hi" + this.name;
    }
}

const user2 = new Employee1('John', 21);

/*
*
*
* */