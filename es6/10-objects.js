// ---------- OBJECTS
// Three methods to convert objects into arrays
// Object.keys() --> converts property names into arrays
// Object.values() --> converts property values into arrays
// Object.entries() --> converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

// ---------- OBJECT.KEYS()
const keys = Object.keys(person);
console.log(keys);

// ---------- OBJECT.VALUES()
const values = Object.values(person);
console.log(values);

// ---------- OBJECT.ENTRIES()
const result = Object.entries(person);
console.log(result); // logs EACH ITEM as an array!
// [['name', 'john'], ['age', 25], ['status', 'student']]

// map method to get items OUT of individual arrays
const newResult = result.map((item) => {
  // array desctructuring to grab array items within the item
  const [first, second] = item;
  console.log(first, second);
  // logs:
  // name john
  // age 25
  // status student
  return first; // only return the first items
});

console.log(newResult); // logs ['name', 'age', 'status']

// for of
for (const item of result) {
  const [first, second] = item;
  console.log(first, second);
  // logs:
  // name john
  // age 25
  // status student
}

// THIS ALSO WORKS! Desstructuring the Array
for (const [first, second] of result) {
  console.log(first, second);
  // logs:
  // name john
  // age 25
  // status student
}
