// ---------- NEW SET(): GENERAL OVERVIEW
// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();
console.log(unique); // logs Set(0) {size: 0}

unique.add('first');
unique.add('first');
unique.add('first');
unique.add('first');
unique.add('first');

console.log(unique); // only store 'first' one time: Set(1) {'first}

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);

console.log(unique); // logs Set(4) {'first', 'second', 'third', 4}

const result = unique.delete('third');
console.log(result); // logs true

const result2 = unique.delete('five');
console.log(result2); // logs false

// clear() removes ALL items!

const isValue = unique.has(4);
console.log(isValue); // logs true

// ---------- NEW SET(): USE CASE
// new Set() --> accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

const companies = products.map((item) => item.company);
console.log(companies); // logs companies into an array

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies); // logs companies into an object
// Set(3) {'ikea', 'marcos', 'ikea'}
// used the above INSTEAD OF .reduce()

const finalCompanies = [...uniqueCompanies];
console.log(finalCompanies); // logs items into an array
// ['ikea', 'marcos', 'caressa']

const result3 = ['all', ...new Set(products.map((item) => item.company))];
console.log(result3);
// combines all the above steps into 1
// ['ikea', 'marcos', 'caressa']
