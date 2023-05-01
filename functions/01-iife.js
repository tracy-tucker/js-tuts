// IIFE - Immediately-Invoked Function Expression
// older approach - new is to use Modules
// up side: simple approach to avoid gloval scope pollution
// good way at protecting the scope of your function and the variables within it.

// IIFE were commonly used with var because it protected variables with a block scope.

// global namespace, extra steps

const num1 = 30;
const num2 = 50;

// basic function setup
function add() {
  console.log(`The result is : ${num1 + num2}`);
}
add();

// IIFE allows you to set up and invoke all in one step

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`The result is : ${num3 + num4}`);
})(); // <-- The () at the end invokes the function

// console.log(num3); // logs an error b/c variable enclosed within IIFE are protected.

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`The result is : ${num3 + num4}`);
})();

// pass arguments
(function (num3, num4) {
  console.log(`The result is : ${num3 + num4}`);
})(500, 900);

// return/assign to variable
const result = (function (num3, num4) {
  console.log(`The result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 900);

console.log(result);
