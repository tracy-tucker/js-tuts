// ---------- NEW STRING METHODS
// String, Array, Map, Set, etc. - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  //   console.log(letter);
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
console.log(shortName); // logs JohnSmithPepperIII

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break; // stops before 'banana'
    // continue; // continues, but ignores 'banana'
  }
  console.log(fruit);
}
