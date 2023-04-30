// Data Types - 7 total
// Primitive - String, Number, BigInt, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// PRIMITIVES
// String
const text = 'some text';
// Number
const number = 45;
// Boolean
let value1 = true;
let value2 = false;
// Null
const result = null;
// Undefined
let name;
// Symbol(ES6)
// COME BACK TO THIS ONE

console.log(typeof text);
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);

// OBJECTS: Arrays, Functions and Objects

// Arrays: [], 0 index based
const friends = ['anna', 'tony', 'layla', 'jimmy', 45, undefined, null];
let bestFriend = friends[2]; // bestFriend = 'layla'
friends[4] = 'susy'; // reassigns 45 to 'susy'

// Functions: declare, invoke

// Declare it
function hello() {
  console.log('Hello there Troy');
}
// Invoke it
hello();

// Passing an argument/parameter
function goodbye(name) {
  console.log(`Goodbye there, ${name}!`);
}
// Invoking the function with a passed-in argument/parameter
goodbye('Troy');
goodbye('Anna');
goodbye('Jonah');

// Function Return --> a function that uses return
function calculate(measurement) {
  //   return 'hello world'; // None of the measurements will be returned. Only this statement
  return value * 2.54;
  console.log('The measurement in cm is: ' + measurement * 2.54 + ' cm'); // Dimmed-out because JS stops at the return statement
}

const wallHeight = 80;

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

// Function Expression --> a function assigned to a variable
// ES6 uses Arrow Functions instead
const addExpression = function addValues(num1, num2) {
  return num1 + num2;
};

const callValues = [1, 3, addExpression(5, 0)]; // calling the function expression within the array
// console.log(callValues) // calling all values together

// Anonymous Function Examples
// (function () {
//   // ...
// });

// let show = function () {
//   console.log('Anonymous function');
// };

// show();

// Objects: collection of properties.
// key/value pairs methods
// if the property value = a function, then it's called a method
// dot notation

const person = {
  name: 'Troy',
  lastName: 'Tucker',
  age: 52,
  dog: false,
  married: true,
  siblings: "Don'L",
  greeting: function () {
    console.log('Hello my name is Troy');
  }, // this is a method!
};

console.log(person.name); // logs name
console.log(person.siblings[0]); // log siblings
person.greeting(); // invokes the greeting method
