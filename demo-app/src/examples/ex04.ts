// use of arrow functions (lambda expressions)

function sayHello(name, city) {
    return `Hello ${name}, how\'s weather in ${city}?`;
}

var sayHi = function (name, city) {
    return `Hello ${name}, how\'s weather in ${city}?`;
}

var sayHowdy = (name, city) => {
    return `Hello ${name}, how\'s weather in ${city}?`;
}

var greet = (name = 'friend', city = 'your city') => `Hello ${name}, how\'s weather in ${city}?`;


console.log(sayHello('Vinod', 'Bangalore'));
console.log(sayHi('Vinod', 'Bangalore'));
console.log(sayHowdy('Vinod', 'Bangalore'));
console.log(greet('Vinod'));
console.log(greet());

let nums = [12, 49, 69, 29, 11, 19, 49, 66, 39, 94, 69, 66, 29];

// 0, '', null, false, undefined ---> false
let odd_nums = nums.filter(n => n % 2);
console.log(odd_nums);

// map converts each array element into something else
// ex: squares of all nums
console.log(nums.map(n => n * n));

// findIndex --> returns the first matching element's index
// usually used with array of objects
console.log(nums.findIndex(n => n === 69));