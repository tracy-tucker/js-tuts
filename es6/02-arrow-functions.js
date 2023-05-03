// ---------- ARROW FUNCTIONS
// no name, always expression, assign to variable
// no function keyword
// 'this'

// // regular function
// function sayHi() {
//     console.log('hello');
// }

// sayHi();

// // function expression
// const hello = function(name) {
//     console.log(`Hello ${name}`);
// }
// hello('bob')

// function triple(value1, value2) {
//     return value1 * value2 * 3
// }

// // arrow function
// // when you have a one-liner, omit the {} and return statement
// const sayHi = () => console.log('hello');
// sayHi();

// // when passing in one parameter, omit the ()
// const double = (value) => value * 2;
// const num = double(4);
// console.log(num);

// // when passing in 2 parameters, you need ()
// // if more than a one-liner, you need {} and return statement
// const multiply = (num1, num2) => {
//   const result = num1 * num2;
//   // more code here
//   return result;
// };
// const sum = multiply(4, 6);
// console.log(sum);

// return object
// const object = () => { name: 'john', age: 25 }; // This will error b/c JS is confused by what you are trying to do.
// const object = () => ({ name: 'john', age: 25 }); // You must include () when creating an object in this manner.
// const person = object();
// console.log(person);

// // arrow functions as callback functions
// const numbers = [1, 2, 3, 4, 5, 6];
// // const big = numbers.filter((number) => number > 2);

// // above can also be written this way:
// const big = numbers.filter((number, index) => {
//   console.log(index);
//   return number > 2;
// });
// console.log(big);

// // arrow functions as an event listener
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => console.log('you clicked me'));

// ---------- ARROW FUNCTIONS WITH THIS KEYWORD
// reg function: 'this' refers to parent, left of the dot
// arrow function: 'this' refers to it's current surrounding scope.
//  WITH ARROW FUNCTIONS, THERE IS NO BINDING OF 'THIS'!!
// THE 'THIS' KEYWORD ALWAYS RESPRESENTS THE OBJECT THAT DEFINED THE ARROW FUNCTION (THE ***OWNER*** OF THE FUNCTION)

// THIS is referencing bob
// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// THIS is referencing the window object
// const anna = {
//   firstName: 'anna',
//   lastName: 'sanders',
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };
// bob is to the left of sayName()
// bob.sayName();
// NOT referencing anna. Referencing the window object b/c it is the current surrounding object.
// anna.sayName();

// // Now, THIS is referencing the window object within bob
// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     const self = this;
//     setTimeout(function () {
//       console.log(this);
//       console.log(self);
//       // this one references the window object
//       //   console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//       // this one references the bob object
//       console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
//     }, 2000);
//   },
// };

// bob.sayName();

// // THIS is referencing the anna object
// const anna = {
//   firstName: 'anna',
//   lastName: 'sanders',
//   sayName: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };

// anna.sayName();

// ---------- ARROW FUNCTIONS: SELECT ELEMENTS AND 'THIS'

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   // if in doubt, log the THIS
//   // THIS belongs to btn
//   console.log(this);
//   this.style.color = 'black';
// });

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   // if in doubt, log the THIS
//   // THIS belongs to window
//   console.log(this);
//   this.style.color = 'black';
//   // MUST use function(). () => would belong to the window object
// //   setTimeout(function () {
//   setTimeout(function () {
//     this.style.color = 'black';
//   }, 2000);
// });

// Example is a correct implementation of an arrow function for this use case.
// addEventListener utilizes a a regular function, while the setTimeout utilizes an arrow function.
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(this);
//   this.style.color = 'black';
//   setTimeout(() => {
//     this.style.color = 'black';
//   }, 2000);
// });

// ---------- ARROW FUNCTIONS: DEFAULT PARAMETERS AND HOISTING GOTCHAS

// const john = 'john';
// const peter = 'peter';
// // ES6 allows us to set default parameters
// // defaults will be overwritten when we pass a parameter
// function sayHi(person = 'Susan') {
//   console.log(`Hi ${person}`); // logs Susan
// }
// const sayHello = (person = 'Susan') => console.log(`Hello ${person}`); // logs peter

// sayHi();
// sayHello(peter);

// Hoisting: variables MUST be declared before they are called.
// sayHello();
// const sayHello = (person = 'Susan') => console.log(`Hello ${person}`); // does NOT work because sayHello() is declared before being defined.
