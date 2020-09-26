//2.1
let name = 'Igor';
//2.2
const year = 2001;
//2.3
function greet(name) {
    console.log('Hello - ', name);
}
greet(name);

//2.6
const average = (a, b) => (a + b) / 2;
const square = (x) => x ** 2;
const cube = (x) => x ** 3;

let results = [];

for (let i = 0; i <= 9; i++) {
    results[i] = average(square(i), cube(i));
}
const calculate = () => results;
console.log(calculate());