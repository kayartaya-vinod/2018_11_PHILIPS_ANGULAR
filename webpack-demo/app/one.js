// CommonJS style of module import
const two = require('./two');
const three = require('./three');

// ES6 style of importing
// import {two} from './two';

// CommonJS style of module export
module.exports = function one() {
    return 'This is from method one()';
}

// ES6 Style of module export
// export function oneFunction() {
//     return 'This is from oneFunction';
// }