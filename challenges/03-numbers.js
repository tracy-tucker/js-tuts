// JS is loosely typed, meaning, we don't need to declare the type (like with TS)
// Numbers can be whole or with decimals.
// Console logs numbers colored as blue and strings as colored black

// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

// JS follows Please Excuse My Dear Aunt Sally

let numb = 23;
numb++;
numb++;
numb--;
console.log('numb', numb);

// Modulus operator example:
const slices = 10;
const friends = 3;
const amount = slices % friends;
console.log('slices remaining', amount);

const score1 = 25;
const score2 = 60;
const score3 = 77;

const totalScore = score1 + score2 + score3;
console.log('totalScore', totalScore);

const averageScore = totalScore / 3;
console.log('Average Score', averageScore);

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
console.log('remainder', remainingPlates);
remainingPlates += 1;

const message = 'There are ' + remainingPlates + ' plates available';
console.log(message);

const text = 'some text';

console.log(typeof text);

console.log(typeof 1n); //bigInt

// Implicit Type Conversion
// JS will try to help you out by implicitly converting, but in this case it is concatenating

let number3 = '10';
let number4 = '23';
const result2 = number3 + number4;
console.log('implicit type result', result2);
