const peeps = ["anna", "johanna", "ted", "jonah", 45, undefined, null];
console.log(peeps);

peeps[4] = "Troy";
let myMan = peeps[4];
console.log(myMan);

const fruits = ["apple", "banana", "orange", 38];
let firstFruit = fruits[0];
fruits[3] = "blueberries";

console.log(firstFruit);
console.log(fruits);

function hello() {
  console.log("Hello there Troy");
}
hello();

function goodbye(name) {
  console.log(`Goodbye there, ${name}!`);
}
goodbye("Troy");
goodbye("Anna");
goodbye("Jonah");

// Function Expression --> a function assigned to a variable
const value = function addValues(num1, num2) {
  return num1 + num2;
};

// Anonymous Function Examples
(function () {
  // ...
});

let show = function () {
  console.log("Anonymous function");
};

show();
