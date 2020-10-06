'use strict';
// //2.1
// let name = 'Pidar';
// //2.2
// const year = 2001;
// //2.3
// function greet(name) {
//     console.log('Hello - ', name);
// }
// greet(name);

// //2.6
// const average = (a, b) => (a + b) / 2;
// const square = (x) => x ** 2;
// const cube = (x) => x ** 3;

// const calculate = () => {
//     let results = [];
//     for (let i = 0; i <= 9; i++) {
//         results[i] = average(square(i), cube(i));
//     }
//     return results;
// }
// console.log(calculate());

// ARRAYS

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];

// // cars.unshift('Lada');
// // cars.push('Renault');
// // const firstCar = cars.shift();
// // const lastCar = cars.pop();
// cars.reverse();
// console.log(cars);

// //Task 1
// const text = 'Hello, we are studying JavaScript';
// const reverseText = text.split('').reverse().join(' ');
// console.log(reverseText);

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];
// const index = cars.indexOf('BMW');

// const people = [
//     {name:  'Vladilen', budget: 4200},
//     {name:  'Elena', budget: 3500},
//     {name:  'Victoria', budget: 1700}
// ]
// // const index = people.findIndex(function(man){
// //     return man.budget === 3500;
// // })
// // const index2 = people.find(function(person){
// //     return person.budget === 3500;
// // })
// const person = people.find(person => person.budget === 3500);
// console.log(person);

// // let findedPerson;
// for(const person of people){
//     if(person.budget === 3500){
//         findedPerson = person;
//     }
// }
// console.log(findedPerson);

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];
// const fib = [1, 1, 2, 3, 5, 8, 13, 21];
// const upperCaseCars = cars.map((car) => {
//     return car.toUpperCase();
// });
// console.log(upperCaseCars);

// const pow2 = (num) => num ** 2;
// const sqrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(pow2).map(sqrt);
// console.log(pow2Fib);

// const pow2 = (num) => num ** 2;
// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib);
// console.log(filteredNumbers);

// const people = [
//     { name: 'Vladilen', budget: 4200 },
//     { name: 'Elena', budget: 3500 },
//     { name: 'Victoria', budget: 1700 },
// ];

// const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
// }, 0)

// console.log(allBudget);

//8  O B J E C T S

const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed key',
    greet() {
        console.log('greet from person');
    },
};
// console.log(person.name);
// const ageKey = 'age';
// console.log(person[ageKey]);
// console.log(person['complex key']);
// console.log(person);
// // console.log(person.greet());
// person.greet();

// delete person['key_4'];
// // person['key_4'] = undefined;
// person['shit'] = '';
// console.log(person);

// Деструктуризація
// const name = person.name;
// const age = person.age;
// const languages = person.languages;
//  X
// const {name, age, languages} = person; // or
// const { name, age: personAge = 10, languages } = person;

// console.log(name, personAge, languages);
