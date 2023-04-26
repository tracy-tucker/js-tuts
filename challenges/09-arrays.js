// Array Properties and Methods

let names = ['Tracy', 'Troy', 'Preston', "Don'L", 'Brock'];

// .length property
console.log(names[names.length - 1]); // logs last name

// concat method
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames); //Adds these to existing names array
console.log('allNames', allNames);

// reverse method
console.log('reversed', allNames.reverse()); // reverses array order

// unshift method
allNames.unshift('susy');
console.log('first add', allNames); // adds susy to beginning of array

// shift method
allNames.shift();
console.log('shift', allNames); // removes first name from array

// push method
allNames.push('susy');
console.log('last add', allNames); // adds susy to the end of the array

// pop method
allNames.pop();
console.log('pop', allNames); // removes susy from the end of the array

// splice method - mutates original array! Take 2 arguments
const specificNames = allNames.splice(2, 1); // grabs at index of 2, and only 1 item
console.log('spliced', specificNames);
console.log('original list', allNames); // returns all names, but the "spliced" name is missing

// Full name array exercise
const llama = ['anna', 'susy', 'bob', 'john'];
const lastName = 'shakeandbake';
let newArray = [];

// for loop
for (let i = 0; i < llama.length; i++) {
  console.log(llama[i]); // logs each name in the array. i represents the index of the array.
  const fullName = `${llama[i]} ${lastName}`;
  newArray.push(fullName);
  // newArray.push(`${names[i]} ${lastName}`) // Also an acceptable solution
  console.log('name array', newArray);
  // newArray = ['anna shakeandbake', 'susy shakeandbake', 'bob shakeandbake', 'john shakeandbake']
}

// Calculate Total exercise
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
let bobo = 'bobo';
bobo = 'peter';

function calculate() {
  //some other code...
  console.log(bobo);
  bobo = 'orange';
  function inner() {
    bobo = 'inner name value';
    console.log(`this is the inner function ${bobo}`);
  }
  inner();
}

calculate();

if (true) {
  // some code
  console.log('im in true', bobo);
  bobo = 'pants';
}

console.log(`my name is ${bobo} and I am awesome`);

// Local Scope
function calculate() {
  const john = 'john';
  // the below becomes global
  // global because it is not assigned with a keyword.
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const john = 'john';
}

{
  const name = 'special';
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
    console.log('multiplied', multiplyResult);
  }
  multiply();
  return result; // if no return, result is undefined
}

console.log('added', add(3, 4));
