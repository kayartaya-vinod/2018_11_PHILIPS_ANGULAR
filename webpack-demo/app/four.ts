export class Person {
    constructor(private name: string, private age: number = 33) { }

    print() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}