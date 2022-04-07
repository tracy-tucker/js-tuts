// .length property
let text = "Tracy";
console.log("length is ", text.length);

// .charAt method
console.log("character at 3: ", text.charAt(3));

// combining a property and method
console.log("Unknown string: ", text.charAt(text.length - 1));

// .includes method
console.log("includes: ", text.includes("rac"));

// .slice method
console.log("slice at T", text.slice(1));
console.log("slice cuts off at 'c'", text.slice(0, 3));
console.log("slice cuts off at 'a'", text.slice(-2));

// Template literals
const greet = `Hello, my name is ${text}`;
console.log(greet);

// create a function fullName
// Accepts 2 parameters firstName LastName
// add them together (concat) and return result in uppercase
// invoke fullName and pass some values
// log result

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName("Tracy", "Tucker"));

// change the order of arguments
// refactor to object parameter
function fullName({ firstName, lastName }) {
  // parameters are passing in as keys
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "Tucker", firstName: "Tracy" }));
// assigns the key/values pairs when passing in the arguments.

let names = ["Tracy", "Troy", "Preston", "Don'L", "Brock"];
