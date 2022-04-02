// Object
const person = {
  name: "Tracy",
  lastName: "Tucker",
  age: 38,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function sayHello() {
    console.log("Hello! My name is Tracy!"); // this is a method
  },
};

const age = person.age;
console.log(age);
person.name = "Troy";
console.log(person.name);

person.greeting();

const car = {
  make: "Mazda",
  model: "CX-5",
  year: 2018,
  colors: ["Silver", "Black"],
  hybrid: false,
  drive: function drive() {
    console.log("car is driving!");
  },
  stop: function stop() {
    console.log("car is stopping!");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

const value = 2 > 1;
console.log(typeof value);

const value2 = 1 > 2;
if (value2) {
  console.log("hello world");
} else {
  console.log("hello people");
}

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if (num1 > num2) {
  console.log("first number is bigger than second");
} else if (result) {
  console.log("first number is equal to the second");
} else {
  console.log("second number is bigger than first");
}

const value3 = false;
if (!value3) {
  console.log("value is false");
}
