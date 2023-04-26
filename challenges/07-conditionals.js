// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !==
// else if and !
// logical operators: (|| - OR), (&& - AND)

const value = 2 > 1;
console.log(typeof value); // logs Boolean

const value8 = false;
if (value8) {
  console.log('Hello world'); // never runs because value is false
} else {
  console.log('Hello people');
}

const value2 = 1 > 2;
if (value2) {
  console.log('hello world');
} else {
  console.log('hello people');
}

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if (num1 > num2) {
  console.log('first number is bigger than second');
} else if (result) {
  console.log('first number is equal to the second');
} else {
  console.log('second number is bigger than first');
}

const value3 = false;
if (!value3) {
  console.log('value is false');
}

const numA = 6;
const numB = '6';

const valueA = numA === numB;
console.log(valueA);

const name = 'peter';
const age = 24;

// if (name === "bob" || age === 24) {
//   console.log("hello there user");
// } else {
//   console.log("wrong values");
// }

if (name === 'bob' && age === 24) {
  console.log('hello there user');
} else {
  console.log('wrong values');
}

// switch statement
const dice = 3;

switch (dice) {
  case 1:
    console.log('You got one');
    break; // break = 'condition met, go no further'
  case 2:
    console.log('You got two');
    break;
  case 3:
    console.log('You got three');
    break;
  default:
    console.log('you did not roll the dice');
}

// else if
// if (dice === 1) {
//   console.log("you got one");
// } else if (dice === 2) {
//   console.log("you got two");
// } else {
//   console.log("you did not roll the dice");
// }

// all if
// if (dice === 1) {
//   console.log("you got one");
// }
// if (dice === 2) {
//   console.log("you got two");
// }
// if (dice < 1 || dice > 6) {
//   console.log("you did not roll the dice");
// }

// LOOPS

// While Loop
// Repeatedly run a block of code while condition is true
let amount = 10;

while (amount > 0) {
  console.log(`I have $${amount} and I am going to the mall.`);
  amount--;
}

// Do While Loop
// Code block first, condition second
// runs at least once
let money = 0;

do {
  console.log(`You have $${money} dollars`); // 1. code block
  money++;
} while (money <= 10); // 2. condition

// For Loop
// Repeatedly runs a block of code while condition is true
// variable can be declared inside or outside for loop
// variable declared outisde for loop:
let i;
for (i = 0; i < 10; i++) {
  console.log(`and the number is: ${i}`);
}

// variable declared inside for loop:
for (let number = 11; number >= 0; number--) {
  console.log(`and the number is: ${number}`);
}

// Conditionals Challenge:
const person1 = {
  name: 'Tony',
  age: 25,
  status: 'resident',
};

const person2 = {
  name: 'Peter',
  age: 17,
  status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('you can cast a vote'); // This one gets logged.
} else {
  console.log('you are not eligible');
}

if (person2.age >= 18 && person2.status === 'resident') {
  console.log('you can cast a vote');
} else {
  console.log('you are not eligible'); // This one gets logged.
}
