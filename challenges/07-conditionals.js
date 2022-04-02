const numA = 6;
const numB = "6";

const valueA = numA === numB;
console.log(valueA);

const name = "peter";
const age = 24;

// if (name === "bob" || age === 24) {
//   console.log("hello there user");
// } else {
//   console.log("wrong values");
// }

if (name === "bob" && age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}

const dice = 3;

// switch statement
switch (dice) {
  case 1:
    console.log("You got one");
    break;
  case 2:
    console.log("You got two");
    break;
  case 3:
    console.log("You got three");
    break;
  default:
    console.log("you did not roll the dice");
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

const person1 = {
  name: "Tony",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "Peter",
  age: 17,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}

let amount = 10;

while (amount > 0) {
  console.log(`I have $${amount} and I am going to the mall.`);
  amount--;
}

let money = 0;

do {
  console.log(`You have $${money} dollars`);
  money++;
} while (money <= 10);

// variable declared outside for loop
let i;
for (i = 0; i < 10; i++) {
  console.log(`and the number is: ${i}`);
}

// variable declared inside for loop
for (let number = 11; number >= 0; number--) {
  console.log(`and the number is: ${number}`);
}
