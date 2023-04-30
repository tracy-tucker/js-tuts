// ---------- The keyword, THIS
// points to the left of the dot

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(`My full name is John Anderson`);
//   },
// };

// const bob = {
//   firstName: 'john',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is Bob Sanders`);
//   },
// };

// john.fullName();
// bob.fullName();

// PROBLEM WITH THE ABOVE: 2 objects with the exact same properties, and same methods. Only difference is change in firstName and lastName. This is repetitive and not dynamic.

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log('this', this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log('this', this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// john.fullName(); // THIS points to whatever is to the left of the dot.
// bob.fullName();

// ---------- The keyword, THIS: Advanced
/* In Regular Functions (not arrow) 'this' is determined by 'HOW'!!!
a function is invoked (left of .) (Who the 'invoker' is)

THIS defaults to global - window when you 'think' there is nothing to the left of the dot.
arrow functions - pump the breaks!
*/

console.log('this', this); // logs a global window object

function showThis() {
  console.log(this);
}

const john = {
  name: 'john',
  showThis: showThis,
};

const bob = {
  name: 'bob',
  showThis: showThis,
};

john.showThis(); // points to john object because the john object is INVOKING the function
bob.showThis(); // points to bob object because the bob object is INVOKING the function

showThis(); // points to the window object because the window object is INVOKING the function

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis); // logs btn-1
// btn2.addEventListener('click', showThis); // logs btn-2
btn2.addEventListener('click', function () {
  showThis();
}); // logs window object. it is REFERENCING a function that belongs to the window object
