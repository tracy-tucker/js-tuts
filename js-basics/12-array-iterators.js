// Powerful Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in an array. Reference Item in the Callback parameter.

const numbers = [0, 1, 2, 3, 4];

// ---------- For Loop ----------
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// ---------- forEach ----------
// DOES NOT return a new array
// const people = [
//   { name: "Bob", age: 20, position: "developer", salary: 200, id: 1 },
//   { name: "Peter", age: 25, position: "designer", salary: 300, id: 2 },
//   { name: "Susy", age: 30, position: "the boss", salary: 500, id: 3 },
//   { name: "Anna", age: 35, position: "the boss", salary: 500, id: 4 },
// ];

// Callback function to be passed in to the forEach method
// ONE WAY to pass in callback function --> directly
// function showPerson(person) { // passing in a reference to people array. this can be whatever name you want
//   console.log(person.position.toUpperCase()); // iterates over each object item within the array
// }

// people.forEach(showPerson); // forEach relies on a callback Function. the callback function is what you are passing in to the forEach method

// ANOTHER WAY to pass in a callback function --> as a reference
// ES6 uses Arrow Functions instead of this anonymous callback function.
// people.forEach(function (item) { // passing in a reference to people array. this can be whatever name you want
//   console.log("working", item.position.toUpperCase());
// });

// ---------- map ----------
// returns a new array
// does not change size of original array
// uses values from original array when making new one

// const ages = people.map(function (person) { // map relies on a callback Function. the callback function is what you are passing in to the map method
//  return person.age + 20;
// });

// console.log("ages", person.age); // returns new array!

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// console.log(newPeople); // returns new array!

// const names = people.map(function (person) { // map relies on a callback Function. the callback function is what you are passing in to the map method
//   return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join("");

// console.log(names);

// ---------- filter ----------
// returns a new array
// can manipulate the size of new array
// returns based on condition

// const youngPeople = people.filter(function (person) { // filter relies on a callback Function. the callback function is what you are passing in to the filter method
//   return person.age <= 25; // filter is based on a condition for a true/false result
// });

// console.log("filter", youngPeople);

// const developers = people.filter(function (person) { // filter relies on a callback Function. the callback function is what you are passing in to the filter method
//   return person.position === "developer"; // filter is based on a condition for a true/false result
// });

// console.log("developers", developers);

// ---------- find ----------
// returns a single instance (object)
// returns FIRST MATCH ONLY, if no match, then undefined
// great for getting a unique value

// const person = people.find(function (person) { // find relies on a callback Function. the callback function is what you are passing in to the find method
//   return person.id === 3; // find is based on a condition for a true/false result
// });

// console.log("find", person);

// const peeps = ["bob", "peter", "susy"];

// console.log(
//   peeps.find(function (peep) {
//     return peep === "bob";
//   })
// );

// ---------- reduce ----------
// iterates, callback function
// reduces to a single value - number, array, object
// parameter 1 ('acc') - total of all calculations
// parameter 2 ('curr') - current iteration/value

// const total = people.reduce(function (acc, currItem) { // reduce relies on a callback Function. the callback function is what you are passing in to the reduce method
//   console.log(`total ${acc}`);
//   console.log(`current salary: ${currItem.salary}`);
//   // remember: reduce() is an array iterator
//   // it's going to iterate over the array given
//   acc += currItem.salary;
//   // you MUST ALWAYS return the accumulator
//   return acc; // ALWAYS ALWAYS ALWAYS return the acc (accumulator), the total of all calculations
// }, 0); // 0 represents the value (or, number) you will be returning. This could also be an array [] or an object {}. It's important to know what type of value your reduce method expects to return!

// console.log("final total", total);

// ********** ---------- CHALLENGES ---------- **********
// Create an array of students
// Each student is going to be an object

// THE DATA IS IN THE data.js FILE
// ---------- map challenge ----------
// Update Students
// 1. Add role: 'student' property to each object
// 2. Use the map() method
// 3. Assign to updatedStudents variable and log

const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
  //   console.log("each student", student);
});

console.log('updatedStudents', updatedStudents);

// ---------- filter challenge
// 1. filter array and return only scores >=80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
  return student.score >= 80;
});

console.log('highScores', highScores);

// ---------- find challenge
// 1. find specific id in array
// 2. assign to specificId variable and log

const specificId = students.find(function (student) {
  return student.id === 3;
});

console.log('SpecificId', specificId);

// ---------- reduce challenge 1
// 1. Sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to averageScore and log

const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;

console.log('averageScore', averageScore);

// ---------- reduce challenge 2
// Square Bracket Notation for creating a Dynamic Property/Value
// 1. list favorite subjects with reduce
// {
//     english: 1
//     history: 1
//     math: 3
// }
// 2. assign to survey and log

// Explanation example
const subject = 'math';

const total = {};
total[subject] = 'some value'; // This assigns a value to the dynamic property, subject
console.log(total);

const survey = students.reduce(function (survey, student) {
  //   console.log(student.favoriteSubject);
  // remember, reduce will ITERATE over the array of objects
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey; // ALWAYS return the accumulator!
}, {}); // {} because we need to return an object

console.log('random', survey);

// ---------- A NOTE ON .JOIN()
// JS Array join(): syntax = array.join(separator)
// join() method returns an array as a STRING
// join() method does NOT change the original array
// Any separator can be specified. The default is comma (,)
