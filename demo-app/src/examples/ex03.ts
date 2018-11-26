// example for using classes ES6 style

/*
// ES5 style
function Person() {
    this.firstname = 'Vinod';
    this.lastname = 'Kumar';
}

// to add member method:
Person.prototype.print = function() {
    console.log('Name is ', this.firstname, this.lastname)
}

Person() // inside the function Person() 'this' keyword points to Window

const p1 = new Person(); // inside the function Person(), 'this' keyword changes the context from window objet to a newly constructed object

p1.print();
*/

class Person {
    // in typescript, you can also declare variables here itself
    // private name: string;
    // private email: string;
    // private age: number;

    // optional special method (constructor)
    // gets called once during object creation
    constructor(private name: string, private email: string, private age: number) {
    }

    print() {
        // arrow functions remember 'this' means the invoking object
        // regular functions change the context from invoking object to 'window'
        setTimeout(() => {
            console.log('Name  = %s', this.name);
            console.log('Email = %s', this.email);
            console.log('Age   = %d years', this.age);
        }, 2000);
    }
}

var p1 = new Person('vinod', 'vinod@vinod.co', 45);
p1.print();


window['name'] = 'john';
window['age'] = 22;
window['city'] = 'Dallas';