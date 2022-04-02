let numb = 23;
numb++;
numb++;
numb--;
console.log(numb);

const slices = 10;
const friends = 3;
const amount = slices % friends;
console.log(amount);

const score1 = 25;
const score2 = 60;
const score3 = 77;

const totalScore = score1 + score2 + score3;
console.log("totalScore", totalScore);

const averageScore = totalScore / 3;
console.log("Average Score", averageScore);

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
console.log("remainder", remainingPlates);
remainingPlates += 1;

const message = "There are " + remainingPlates + " plates available";
console.log(message);

const text = "some text";

console.log(typeof text);

console.log(typeof 1n); //bigInt
