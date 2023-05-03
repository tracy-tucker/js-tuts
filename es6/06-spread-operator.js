// ---------- SPREAD OPERATOR: BASICS
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.
// spread operator: unpacks the collected elements into single elements (the opposite of the rest operator)
// used to copy one array into another, or to concatenate 2 arrays together.

// const udemy = 'udemy';
// const letters = [...udemy];
// console.log(letters); // logs ["u", "d", "e", "m", "y"]

// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = 'arnold';

// const friends = [...boys, ...girls, bestFriend];
// console.log(friends); // makes one big array :-)

// // const newFriends = friends;
// // newFriends[0] = 'Karina'; // WRONG! This is mutating the original array
// // console.log(friends);
// // console.log(newFriends);

// // CORRECT WAY
// const newFriends = [...friends];
// console.log(newFriends); // logs a copy of friends array

// ---------- SPREAD OPERATOR: OBJECTS
// ES2018 - ES8
// spread operator = for arguments

// const person = { name: 'john', job: 'developer' };
// const newPerson = { ...person, city: 'chicago', name: 'peter' }; // copies person object, adds city, changes name to 'peter'
// console.log('newPerson', newPerson);

// ---------- SPREAD OPERATOR: DOM ELEMENTS

// const headings = document.querySelectorAll('h1');
// const result = document.getElementById('result');

// console.log(headings);
// // cannot use .map() on DOM elements
// // workaround: use spread operator to put into array!
// const text = [...headings]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join(' ');

// result.innerHTML = text;

// ---------- SPREAD OPERATOR: FUNCTION ARGUMENTS

// console.log(Math.max(4, 5, 6, 7, 88)); // cannot log array of numbers

// const numbers = [23, 45, 66, 88, 2345];
// console.log(Math.max(numbers)); // logs NaN
// console.log(Math.max(...numbers)); // spread operator splits these into single items! And this time performs the .max() method

// const john = ['john', 'sanders'];

// const sayHello = (name, lastName) => console.log(`Hello ${name} ${lastName}`);

// sayHello(...john);

// ---------- REST OPERATOR
// gathers/collects the items
// rest operator = for parameters
// rest operator: a collection of all remaining elements into an array.

// arrays
// const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
// destructuring the first item from the array
// the can have whatever name you wish. const [apple] = fruit works too!
// const [first] = fruit;
// rest adds on the remaining items as a separate array
// you can name it whatever you wish. const [first, ...random] = fruit works too!
// const [first, ...rest] = fruit;
// const [first, second ...rest] = fruit; // logs: apple, orange, ['lemon', 'banana', 'pear']
// console.log(first, rest); // logs: apple, ['orange', 'lemon', 'banana', 'pear']
// const [first, ...rest] = fruit;

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { ...rest, job } = person; // DOES NOT WORK. rest element MUST be the last item listed
const { job, ...rest } = person;
console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

// collecting parameters of a function
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  // logs: john, [78, 90, 56, 43]
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};
// you can have as many scores as you want. the rest operator will gather those and put them in an array
getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
