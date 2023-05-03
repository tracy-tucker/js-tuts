// ---------- DESTRUCTURING: ARRAYS
// faster/easier way to access/unpack values from arrays
// objects into variables

// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const orange = fruits[0];
// const banana = fruits[1];
// const lemon = fruits[2];
// console.log(orange, banana, lemon);

// // Destructuring - a better way to do the above
// // const [john, peter, bob, anna, kelly] = friends;
// // console.log(john, peter, bob, anna, kelly);
// // if you try to access an item that is NOT part of the array, the result will be undefined

// // if you want to skip items in an array, add commas in their place
// const [john, , bob, , kelly] = friends;
// console.log(john, bob, kelly);

// ---------- DESTRUCTURING: SWAP VARIABLES

// let first = 'bob';
// let second = 'john';

// // let temp = second;
// // second = first;
// // first = temp;

// // second now = first, and first now = second
// [second, first] = [first, second]

// console.log(first, second);

// ---------- DESTRUCTURING: OBJECT DESTRUCTURING

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);

// const {
//   first: firstName, // using colons can create an alias
//   last,
//   city,
//   siblings: { sister }, // using colons and {} to get to the sister property
// } = bob;

// console.log(firstName, last, sister);

// ---------- DESTRUCTURING: FUNCTION PARAMETERS

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// destructuring function parameters
function printPerson({ first, last, city }) {
  // const { first, last, city } = person // no longer needed
  console.log(first, last, city);
}

printPerson(bob);
