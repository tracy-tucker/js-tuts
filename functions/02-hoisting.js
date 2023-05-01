// Hoisting
// function and var declarations are hoisted
// safer to access ONLY after initialization

// yes, you can hoist. No, it's not safe. Avoid unecessary bugs

display(); // functions can be invoked before declared
moreComplex(); // logs undefined
console.log(display);

// You can run into errors!
// console.log(firstName); // displays error
// console.log(lastName); // displays error
// console.log(random); // logs as undefined

function moreComplex() {
  console.log(`random ${random}`);
}

let firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}
