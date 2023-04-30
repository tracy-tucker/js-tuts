// ---------- Factory Functions
// Both are the Blue Prints
// Factory functions and Constructor Functions
// Factory Functions - a function that returns the object

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I live JS`
//     );
//   },
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// function createPerson() {
//   return {
//     firstName: 'john',
//     lastName: 'anderson',
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName}, and I love JS`
//       );
//     },
//   };
// }

// const john = createPerson();
// john.fullName();
// This above works great! But, i's not dynamic. You can't use this object for a different name.

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName}, and I love JS`
//       );
//     },
//   };
// }

// const john = createPerson('john', 'anderson');
// john.fullName();
// const susy = createPerson('susy', 'apple');
// susy.fullName();
// const bob = createPerson('bob', 'jordan');
// bob.fullName();

// ---------- Constructor Functions
// new - creates a new object, points to it, omit return
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
// }

// const john = new Person('john', 'anderson');
// john.fullName();

// ---------- Constructor Property
// All objects in JS have access to constructor property that returns a constructor function that created it.
// built-in constructor functions
// arrasy and function are objects in JS

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person('john', 'sanders');
console.log(john.constructor); // returns the Person function

const bob = {};
console.log('bob', bob.constructor); // return construction object, called Object

const list = [];
console.log('list', list.constructor);

const sayHi = function () {};
console.log('sayHi', sayHi.constructor);

const susy = new john.constructor('susy', 'carpenter');
susy.fullName();
console.log('susy', susy); // the construct of john to build susy
