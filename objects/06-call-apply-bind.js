// ---------- Call
// Call - runs instantly, arguments - list of items

// const john = {
//   name: 'john',
//   age: 24,
//   greet: function () {
//     console.log(this);
//     console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
//   },
// };

// const susan = {
//   name: 'susan',
//   age: 21,
// };

// john.greet();

// function greet() {
//   console.log(this);
//   console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
// }

// Susan can't access the greet() function :-(

// use call() - runs instantly and changes where THIS keyword points to
// 1st arg = where THIS keyword should be pointing
// greet.call(susan); // Using call() now allows susan to use greet()
// john.greet.call(susan); // logs: 'Hello, I am susan and I am 21 years old.

// ---------- Apply, Arguments
// apply - runs instantly, 1st arg = where this should be pointing, additional arguments - array of items

// const john = {
//   name: 'john',
//   age: 24,
// };
// const susan = {
//   name: 'susan',
//   age: 21,
// };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I am ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`
//   );
// }
// // call must take additional arguments in as lists
// greet.call(john, 'san diego', 'us');
// greet.call(susan, 'san diego', 'us');
// greet.call({ name: 'peter', age: 30 }, 'san diego', 'us');

// // apply must take additional arguments in as arrays
// greet.apply(john, ['san diego', 'us']);
// greet.apply(susan, ['san diego', 'us']);
// greet.apply({ name: 'peter', age: 30 }, ['san diego', 'us']);

// ---------- Bind
// assign and use later, arguments - list of items

// const john = {
//   name: 'john',
//   age: 24,
// };
// const susan = {
//   name: 'susan',
//   age: 21,
// };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I am ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// // assign, call it later
// // 1st arg = where this should be pointing
// // additional arguments - list of items
// const susanGreet = greet.bind(susan, 'toronto', 'Ca');
// susanGreet();

// ---------- Button Example

const counter = {
  count: 0,
  increment() {
    console.log('this', this);
    this.count++;
    console.log('this count', this.count);
  },
};

const btn = document.querySelector('.increment');
// fails b/c THIS keyword points to btn. btn is invoking counter.increment
// btn.addEventListener('click', counter.increment);

// some edge cases
// passes b/c THIS keyword binds to counter
// btn.addEventListener('click', counter.increment.bind(counter));

// This will also work, and better in some situations
const incrementInstance = counter.increment.bind(counter);
btn.addEventListener('click', incrementInstance);
btn.removeEventListener('click', incrementInstance);
