// ---------- FIND FINDINDEX EVERY SOME
// find --> gets specific item
// findIndex --> gets index of the item
// every --> every item in the array
// some --> at least one item // true or false

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' },
];

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// using filter: filter returns an array!
// const anna = people.filter((person) => person.name === 'anna');
// console.log(anna); // logs anna as an array with one object (index of object = 0)
// console.log(anna[0].name); // targets 1st object, then name
// console.log(anna[0].id); // targets 1st object, then id

// using .find(): returns the single item
// const anna = people.find((person) => person.name === 'anna');
// console.log(anna);

// using findIndex: returns index of an item
const person = people.findIndex((item) => item.id === 3);
console.log(person); // logs index 2
const newPeople = people.slice(0, person); // slice starts at index 0, then stops at index 2
console.log(newPeople); // new array that omits index 2

// using every: returns true ONLY if all items match criteria
const allGoodGrades = grades.every((grade) => grade !== 'C');
console.log(allGoodGrades); // logs false b/c not all items are equal to 'C'

// using some: returns true ONLY if one item matches criteria
const oneBadGrade = grades.some((grade) => grade === 'C');
console.log(oneBadGrade); // logs true b/c at least one item equaled 'C'
