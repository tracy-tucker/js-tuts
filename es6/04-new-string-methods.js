// ---------- NEW STRING METHODS
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith() // ***This is case sensitive!
console.log(person.startsWith('Pet')); // returns true
console.log(person.startsWith('peter')); // returns false
console.log(employee.startsWith('EMP', 6)); // second argument tells startsWith() to start looking at position 6

// endsWith()
console.log(employee.endsWith('DOE'));
console.log(employee.endsWith('MAN', 9)); // second argument tesll endsWith() to start looking at position 9. Position 9 INCLUDES all positions you are looking for b/c endsWith() looks backwards!

// includes()
console.log('employee', employee.includes('PETER')); // returns true

// repeat() // takes in a number of how many times to repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);

// repeat
const people = multiplyPeople(person, 10);
console.log(people);
