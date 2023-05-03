// ---------- ARRAY.FROM & ARRAY.OF NOTES

// const example = ['one', 'two', 'three'];
// console.log(example); // logs example array
// console.log(example.map); // logs map function
// console.log(example.from); // logs undefined
// console.log(example.of); // logs undefined

// ---------- ARRAY.FROM: STRINGS AND ARGUMENTS OBJECT
// Array.from syntax = Array.from(object, mapFunction, thisValue)
// object = required. The object converts to an array
// mapFunction = optional. .map() call on each item
// thisValue = optional. A value to use as THIS for .map()
// NOT ON THE PROTOTYPE
// returns Array Object from any object wth a length property or an iterable object
// from turns array-like/ish into array - string, nodeList, Set

// const udemy = 'udemy';
// console.log(Array.of(udemy)); // log ['udemy']
// console.log(Array.from(udemy)); // log ['u', 'd', 'e', 'm', 'y']

// arguments object
// function countTotal() {
//   console.log(arguments);
// }
// countTotal(67, 89, 54); // returns an Array-like object. For example, cannot use .map().

// function countTotal() {
//   // Array.from creates an array with each passed-in number.
//   // then we can perform the .reduce() array method
//   let total = Array.from(arguments).reduce(
//     (total, currNum) => (total += currNum),
//     0
//   );
//   console.log(total);
// }
// countTotal(67, 89, 54, 100);

// ---------- ARRAY.FROM: DOM ELEMENTS(NODELIST)

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

console.log(p); // log a NodeList array

// THE LONG WAY
let newText = Array.from(p); // logs a TRUE array that can now utilize .map()
console.log(newText);
// this says the new value for newText is newText itself, mapped over.
// .map() creates a new array.
// .join()
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
result.innerHTML = newText;

// THE SHORT WAY
const text = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');

second.innerHTML = text;

// ---------- ARRAY.OF
// NOT ON THE PROTOTYPE
// of creates a new Arry instance from a variable number of arguments.

// const friends = Array.of('john', 2, true);
// // creates a new array with the items passed in as arguments.
// console.log(friends); // logs ['john', 2, true]
