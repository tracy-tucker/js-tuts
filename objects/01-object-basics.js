// Object Basics

/*
Objects are collections of key (property) value pairs.
Property values can be strings, numbers, booleans, arrays and functions. However, if the property value is a function it's called a method.
*/

// ---------- Object literal syntax, {}

// const person = {
//   name: 'john',
//   age: 25,
//   married: true,
//   siblings: ['anna', 'peter'],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
// };

// ---------- dot notation
// console.log(person.name);

// const name = person.name;
// console.log(name);
// person.age = 60;
// console.log(person.age);
// person.city = 'chicago'
// console.log(person);

// ---------- delete property
// delete person.siblings
// console.log((person)); // siblings now gone

// ---------- nested objects
// const person = {
//   name: 'john',
//   age: 25,
//   married: true,
//   siblings: ['anna', 'peter'],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   job: {
//     title: 'developer',
//     company: {
//       name: 'coding addict',
//       address: '123 main street',
//     },
//   },
// };

// console.log(person.job.company.name); // coding addict. if property does not exist, the response is 'undefined'. If trying to access a property on an object that does not exist, you will see an error.

// ---------- set variable as property value
// const age = 60;
// const person = {
//   name: 'john',
//   age: age, // ES6 = age. No need to list the same name twice.
//   married: true,
//   siblings: ['anna', 'peter'],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   job: {
//     title: 'developer',
//     company: {
//       name: 'coding addict',
//       address: '123 main street',
//     },
//   },
// };
// console.log(person.age); // response is 60
// you can take a variable value and assign it to a property value.
// ---------- dot notation vs bracket notation
// const person = {
//   name: 'john',
//   age: 60,
//   married: true,
//   siblings: ['anna', 'peter'],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   job: {
//     title: 'developer',
//     company: {
//       name: 'coding addict',
//       address: '123 main street',
//     },
//   },
//   random-value: 'random', // hyphons are not allowed!
//   'random-value': 'random', // hyphons within quotations are allowed, but not reachable with dot notation :-( you MUST use bracket notation
//   'random value': 'random', // this works too
// };

// console.log(person['name']); // response is 'john'
// console.log(person['random-value']); // response is 'random'
//  console.log(person['unknown property']); // response is undefined
// ********** how to dynamically access object properties:
// let random: 'random-value';
/*
object: {
    property: value,
    ...
    'random-value': 'random'
}
console.log(person[random]);
// 'random-value' is being stored in the variable, random.
// So, loggin this way using bracket notation returns the value of 'random-value', which is 'random'.
// ********** common use-case in React with forms **********
*/
