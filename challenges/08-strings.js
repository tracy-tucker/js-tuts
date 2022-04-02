// .length property
let text = "Tracy";
console.log("length is ", text.length);

// .charAt method
console.log("character at 3: ", text.charAt(3));

// combining a property and method
console.log("Unknown string: ", text.charAt(text.length - 1));

// .includes method
console.log("includes: ", text.includes("rac"));

// .slice method
console.log("slice at T", text.slice(1));
console.log("slice cuts off at 'c'", text.slice(0, 3));
console.log("slice cuts off at 'a'", text.slice(-2));

// Template literals
const greet = `Hello, my name is ${text}`;
console.log(greet);

// create a function fullName
// Accepts 2 parameters firstName LastName
// add them together (concat) and return result in uppercase
// invoke fullName and pass some values
// log result

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName("Tracy", "Tucker"));

// change the order of arguments
// refactor to object parameter
function fullName({ firstName, lastName }) {
  // parameters are passing in as keys
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "Tucker", firstName: "Tracy" }));
// assigns the key/values pairs when passing in the arguments.

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
  console.log(newArray);
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
