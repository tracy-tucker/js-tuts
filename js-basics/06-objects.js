// Object
const person = {
  name: 'Tracy',
  lastName: 'Tucker',
  age: 38,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function sayHello() {
    console.log('Hello! My name is Tracy!'); // this is a method
  },
};

const age = person.age;
console.log(age);
person.name = 'Troy';
console.log(person.name);

person.greeting();

// Object Challenge:
const car = {
  make: 'Mazda',
  model: 'CX-5',
  year: 2018,
  colors: ['Silver', 'Black'],
  hybrid: false,
  drive: function drive() {
    console.log('car is driving!');
  },
  stop: function stop() {
    console.log('car is stopping!');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
