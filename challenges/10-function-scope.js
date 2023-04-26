// Global Scope
// Any variable outside code block {} is said to be in Global Scope
// can be accessed anywhere in the program
// Gotchas: name collisions, modify by mistake

let name1 = 'bobo';
name1 = 'peter';
// const name = 'john' // not allowed, name1 is already used with 'let'

function calculate() {
  // some other code...
  console.log(name1);
  name1 = 'orange'; // causes a collision because you are reassigning a global scope variable
  function inner() {
    name1 = 'inner name value';
    console.log(`this is from inner function ${name1}`);
  }
}

if (true) {
  // some other code...
  console.log(name1);
  name1 = 'pants';
}

console.log(`my name is ${name1} and I'm awesome`); // logs 'pants' because you haver renamed a global scope variable

// Local Scope
// can not be accessed from outside code blocks
// if - NOT VAR

let name2 = 'tony';

function calculate2() {
  const name2 = 'john';
  const age = 25;
  becomesGlobal = 'global variable'; // no keyword used, become globally scoped
}
calculate2();
console.log(age); // cannot access outside of function
console.log(becomesGlobal); // logs as "not defined"

if (true) {
  const name2 = 'susy';
}

console.log(`my name is ${name2} and I'm awesome`);

{
  const name3 = 'joe';
  const special = 'bambi';
}

console.log(special); // cannot log because it is block scoped

// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20; // IF this were to be present, JS would use this reference and not the reference outside the function
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult); // logs 540, looks inside to outside searching for globalNumber
  }
  multiply();
  return result;
}

console.log(add(3, 4)); // logs 27. JS looks inside function for globalNumber FIRST, then searches outside function for reference.
