/*
ES6 Classes - Syntactic Sugar for
Prototypal Inheritance
*/
// ***** PLEASE SEE NOTES ON PROTOTYPES *****
class Account {
  constructor(name, iniitialBalance) {
    this.name = name;
    this.balance = iniitialBalance;
  }
  bank = 'CHASE';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('john', 0);
console.log('john', john);
console.log('john', john.name);
john.deposit(500);
console.log('john balance', john);
console.log('john bank', john.bank);

const bob = new Account('bob', 700);
bob.deposit(1000);
console.log('bob balance', bob);
