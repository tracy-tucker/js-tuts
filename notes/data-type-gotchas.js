// Reference VS Value
// Primitive Data Types:
// String, Number, Symbol, Boolean, Underfined, Null,
// Arrays, Functions, Objects = object
// typeof

// When assigning primitive data type values to a variable, any changes are made directly to that value, without affecting original value

// When assigning non-primitive data type values to a variable, is done by reference so any changes WILL affect ALL the references.

const number = 1;
// const number2 = number;
console.log(`the first value is ${number}`); // logs 1
console.log(`the second value is ${number2}`); // logs 1

let number2 = 7;
console.log(`the second value is ${number2}`); // logs 7

let person = { name: 'bob' };
let person2 = person;
person2.name = 'susy';

console.log(`the name of the first person is ${person.name}`); // logs susy
console.log(`the name of the second person is ${person2.name}`); // logs susy
// By using an object, you are using the REFERENCE!

// Null and Undefined
// both represent "no value"

// undefined - "JS can not find value for this"
// variable without value
// missing function arguments
// missing object peroperties

// null - "developer sets the value"

let number3 = 20 + null; // 20 + 0 = 20
let number4 = 20 + undefined; // 20 + 0 = NaN

// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = '';

if (text) {
  console.log('hey the value is Truthy'); // at least 1 character needs to be present in the string
} else {
  console.log('hey the value is Falsy'); // an empty string is equivalent to 'false'
}

if (bool1) {
  console.log('Hey it works!');
}
if (bool2) {
  console.log('Hey it also works!');
}

// Type of operators:
// unary operator - typeof
let text2 = 'some text';
console.log(typeof text); //operand
// binary operator - assignment
let number5 = 3;
let number6 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)
const value = 2 > 1;

value ? console.log('value is true') : console.log('value is false');
