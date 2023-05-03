// ES6 --> last MAJOR update was in 2015 (ES6 = new standard)
// each new verion after that are only enhancements to ES6

// As of this note (5/1/23) the latest version of ES is ES13(2022)

// Great reference on latest updates, so far:
// https://plainenglish.io/blog/latest-es13-javascript-features

// ---------- VAR, LET, CONST
// define, update, redefine
// const cannot mutate primitive types

// var number = 100;
// // console.log(number);
// // update
// number = 200;
// // console.log(number); // number has updated
// // redefine
// var number = 'orange';
// // console.log(number); // stil redefined number

// let amount = 100;
// // console.log(amount);
// amount = 200;
// // console.log(amount); // amount is now 200
// // let amount = 'orange' // JS will not allow it!

// const total = 100;
// // console.log(total);
// total = 200;
// // console.log(total); // logs error b/c you cannot reassign const
// const person = { name: 'bob' };
// person.name = 'john';
// console.log(person.name); // logs 'John' b/c you can reassign values within an object b/c you are only referencing the property with const person. you can mutate the values, cannot reassign the whole thing altogether.

// ---------- FUNCTION SCOPE AND BLOCK SCOPE
// let, const - block scoped {} - anything within {}
// var - function scoped

// global scope
// var amount = 100;
// function greet() {
//   // local scope
//   var random = 'some random value';
//   console.log(`hello there ${amount} ${random}`);
// }
// console.log(random); // logs error because only available within the function. Var, let and const all behave the same in this scenario

// greet();

// var examples:
// var total = 1000;
// var test = true;

// if (test) {
//   var total = 'oranges and onions';
//   console.log('hello there');
// }

// console.log(total); // logs oranges and onions

// let examples:
// let total = 1000;
// let test = true;

// if (test) {
//   // local scope
//   let total = 'oranges and onions';
//   let value = 'some random value';
//   console.log('hello there');
// }

// console.log(value); // logs an error, value cannot be reached
// console.log(total); // references the global total 1000
// let/const are block-scoped variable assignments

// ---------- TEMPLATE STRINGS
// Template Strings/Literals
// `` backticks above the tab key left of 1 key
// const name = 'bob';
// const lastName = 'sanders';
// const age = 25;

// // OLD way = concat
// const phrase =
//   'My full name is ' +
//   name +
//   ' ' +
//   lastName +
//   " and I'm " +
//   age +
//   ' years old.';

// console.log(phrase);

// template strings/literals
// const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${
//   age * 2
// } years old`;

// console.log(phrase2);

// ---------- TEMPLATE STRINGS HTML
// const person = {
//   name: 'kyle',
//   job: 'developer',
//   hobbies: ['surfing', 'baking', 'bowling'],
// };
// const result = document.getElementById('result');
// OLD WAY - before ES6
// result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>';

// NEW WAY - USING ES6 = WAY EASIER
// result.innerHTML = `
//     <h2>${person.name}</h2>
//     <p>${person.job}</p>
//     <ul>${person.hobbies
//       .map((item) => {
//         return `<li>${item}</li>`;
//       })
//       .join('')}</ul>
// `;

// ---------- TAGGED TEMPLATE LITERALS
// `` backticks above tab key left of 1 key
// The styled-component library uses Tagged Template literals
// 1. you need a function, 2. you need to pass it in your template literal

const author = 'Some Author';
const statement = 'Some Statement';

const quote = highlight`Here is the <strong class='blue'>${statement}</strong> by ${author} and it could not be more true`;
console.log(quote);

const result = document.getElementById('result');
result.innerHTML = quote;

// With this function, have access to all the strings and variables within our template literal
// function highlight(text, statement, author) {
// or, use the rest operator
function highlight(text, ...variables) {
  console.log({ text, variables });
  // return 'hello there';
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class='blue'>${variables[index] || ''}</strong>`;
  });
  return awesomeText.join('');
}
