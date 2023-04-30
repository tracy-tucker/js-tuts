// Callback Functions, Higher Order Functions, Functions as First Class Objets/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)
// Higher Order Function - Accepts another function as an argument or returns another function as a result
// Callback Function - passed to another function as an argument and executed inside the function

// Basic example of 2 functions: NOT PRACTICAL. You have 2 functions that do the exact same thing.
// function greetMorning(name) {
//   const myName = "john";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "susan";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

// greetMorning("Bobo");
// greetAfternoon("Peter");

// USE A HIGHER ORDER FUNCTION THAT TAKES IN A CALLBACK FUNCTION INSTEAD

// Create a function(s) to use as callback function(s)
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.toUpperCase().repeat(3)}`;
}

// Create a function that takes in a callback function as an argument - Higher Order Function
function greet(name, cb) {
  const myName = 'john';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('Bobo', morning);
greet('peter', afternoon);
