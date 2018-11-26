// module name is 'utils'

// local to the module; cannot access this from 
// any other modules
function sayHello() {
    console.log('saying hello..');
}

// named export (can be functions, variables, classes, interfaces, decoraters, etc)
export function welcome() {
    console.log('Welcome to ES6/7/8 features.')
}
export const DVLPR_NAME = 'Vinod Kumar';

// default export (can be only one from a module)
export default function test() {
    console.log('Testing default export...');
}
