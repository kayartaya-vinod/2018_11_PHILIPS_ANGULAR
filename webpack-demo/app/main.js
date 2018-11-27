const one = require('./one');
const two = require('./two');

import { Person } from './four';

const p1 = new Person('Vinod', 45);
p1.print();
p1.name = 123;

console.log('one()', one())
console.log('two()', two())