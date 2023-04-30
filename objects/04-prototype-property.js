/*
Prototypal Inheritance Model
JS uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be accessed by every instance. Prototype property return an object.
*/

/* We work at the bank and we need to create a constructor function for every bank account*/
// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
//   };
// }

// const john = new Account('john', 200); // constructor instance
// const bob = new Account('bob', 0); // constructor instance

// console.log('bob', bob);
// Account.prototype.bank = 'CHASE'; // adds name to each instance

// console.log('john', john.bank); // CHASE now appears with every instance of the constructor

// You could also do this!
// const john = new Account('john', 200); // constructor instance
// const bob = new Account('bob', 0); // constructor instance

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
// }

// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };

// john.deposit(300); // John now has a balance of 500

// ---------- Property Lookup
// If child does not have, ask parent.
// Everything in JS is an Object

const john = new Account('john', 200); // constructor instance

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = 'Bank of America'; // This is the bank name that logs!
}

Account.prototype.bank = 'CHASE'; // adds name to each instance

// console.log('john bank', john.bank);

// JS will look at the instance first, THEN work backwards to the parent (prototype).
console.log('object', {}); // creates a prototype with an objet constructor
console.log('array', []); // creates a prototype with an object constructor
