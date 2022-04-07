let names = ["Tracy", "Troy", "Preston", "Don'L", "Brock"];

// Array Properties and Methods
console.log(names[names.length - 1]);

// concat method
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log("allNames", allNames);

// reverse method
console.log("reversed", allNames.reverse());

// unshift method
allNames.unshift("susy");
console.log("first add", allNames);

// shift method
allNames.shift();
console.log("shift", allNames);

// push method
allNames.push("susy");
console.log("last add", allNames);

// pop method
allNames.pop();
console.log("pop", allNames);

// splice method - mutates original array! Take 2 arguments
const specificNames = allNames.splice(2, 1);
console.log("spliced", specificNames);
console.log("original list", allNames);

// Full name array challenge
const llama = ["anna", "susy", "bob", "john"];
const lastName = "shakeandbake";
let newArray = [];

// for loop
for (let i = 0; i < llama.length; i++) {
  console.log(llama[i]);
  const fullName = `${llama[i]} ${lastName}`;
  newArray.push(fullName);
  console.log("name array", newArray);
}

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log("whoa! You're spending way too much!");
    return total;
  }
  console.log("You're good! Total is less than 100");
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

// Creating an object out of the newly created variables
const totalItems = {
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
};

console.log(totalItems);

// creating an object with newly created items
// key:value pair
// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

//Global Scope
let bobo = "bobo";
bobo = "peter";

function calculate() {
  //some other code...
  console.log(bobo);
  bobo = "orange";
  function inner() {
    bobo = "inner name value";
    console.log(`this is the inner function ${bobo}`);
  }
  inner();
}

calculate();

if (true) {
  // some code
  console.log("im in true", bobo);
  bobo = "pants";
}

console.log(`my name is ${bobo} and I am awesome`);

// Local Scope
function calculate() {
  const john = "john";
  // the below becomes global
  // global because it is not assigned with a keyword.
  becomesGlobal = "global variable";
}

calculate();
console.log(becomesGlobal);

if (true) {
  const john = "john";
}

{
  const name = "special";
  console.log(name);
}

// Below will not run. Cannot access variable outside of block
// console.log(`my name is ${john} and I am awesome.`);

// Variable lookup
const globalVariable = 5;

function add(num1, num2) {
  const globalVariable = 20;
  const result = num1 + num2 + globalVariable;
  function multiply() {
    const multiplyResult = result * globalVariable;
    console.log("multiplied", multiplyResult);
  }
  multiply();
  return result; // if no return, result is undefined
}

console.log("added", add(3, 4));
