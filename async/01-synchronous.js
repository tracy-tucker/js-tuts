// ---------- SYNCHRONOUS
// JS is a single-threaded, synchronous language.
// ** only executes the next line when done with the previous one.
// console.log(`I'm first`);
// boilingWater();
// console.log(`I'm third`);

// function boilingWater() {
//   console.log('boiling...');
//   for (let i = 0; i < 10000; i++) {
//     console.log('still not done...');
//   }
//   console.log('done.');
// }

// ---------- RECIPE EXAMPLE
// Make Soup
// chop onion
// chop carrots
// boil water 10 min
// add carrots boil for 5mts
// add onion boil for 5 mts

function boilWater(time) {
  console.log('boiling...');
  for (let i = 0; i < time; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}

boilWater(10000);
console.log('chop onion');
boilWater(50000);
console.log('chop carrot');
boilWater(50000);
