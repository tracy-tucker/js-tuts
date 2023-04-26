// String properties and methods

// .length property
let text = 'Tracy';
console.log('length is ', text.length);

// .toLowerCase()/.toUpperCase() methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// .charAt method
console.log('character at 3: ', text.charAt(3)); // logs "C"

// combining a property and method
// gets the last value of the string
console.log('Unknown string: ', text.charAt(text.length - 1));

// .indexOf method
console.log(text.indexOf('T')); // logs 1
// if character does not exist, response is -1

// .trim method
console.log(text.trim());
// removes whitespace

// .startsWith method
console.log(text.startsWith('tracy')); // returns nothing
// case sensitive and counts whitespace

// Combining methods
console.log(text.trim().toLowerCase().startsWith('tracy')); // returns true

// .includes method
console.log('includes: ', text.includes('rac'));

// .slice method
console.log('slice at T', text.slice(1)); // Slice only cuts off at T : number tells JS what NOT to include
console.log("slice cuts off at 'c'", text.slice(0, 3)); // cuts off first 3 in index
console.log("slice cuts off at 'a'", text.slice(-2)); // cuts off last 2

// Template literals - ES6
// Backtick characters ``
// Interpolation ${} - insert expression(value)
const greet = `Hello, my name is ${text}`;
console.log(greet);

// Strings Challenge:

// create a function fullName
// Accepts 2 parameters firstName LastName
// add them together (concat) and return result in uppercase
// invoke fullName and pass some values
// log result

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName("tracy", "tucker"));

// change the order of arguments
// console.log(fullName("tracy", "tucker"));

// refactor to object parameter
// parameters are passing in as keys
function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: 'tucker', firstName: 'tracy' }));
// assigns the key/values pairs when passing in the arguments.
