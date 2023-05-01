// Closures
// closures give you access to an outer function's scope from an inner function
// make prive variables with closures

function outer() {
  //   console.log('hello outside');
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there, secret is: ${privateVar}`);
    // inner CAN reach privateVar b/c JS works from inside-out to reach variables.
  }
  //   return; // everything below is ignored
  return inner; // everything below is ignored
  inner(); // calls the function
}

// console.log(privateVar); // logs error b/c log is outside scope and cannot reach variable.

outer()();

const value = outer();
console.log(value);
value();

// Closure Basic Example
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   return showBalance;
// }
// newAccount('susan', 500)();

// const john = newAccount('john', 300);
// const bob = newAccount('bob', 1000);

// john();
// bob();

// Closure Complete Example
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds.`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw }; // this function is now a method, which is still a closure function. this protects the variables. IE: John's balance will never be seen by Bob
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john.showBalance();
john.deposit(400);
john.withdraw(2000);
bob.showBalance();
// The only thing available publicly are the methods, not the balances.
