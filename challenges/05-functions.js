// Function Expression --> a function assigned to a variable
const value = function addValues(num1, num2) {
  return num1 + num2;
};

// Anonymous Function Examples
(function () {
  // ...
});

let show = function () {
  console.log('Anonymous function');
};

show();

// Function Challenge:
function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
console.log(calculateTotal(200, 20));

// Refactored to a function expression!
// const calculateTotal = function (subTotal, tax) {
//   return subTotal + tax;
// };

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
