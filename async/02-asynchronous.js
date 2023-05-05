// ---------- ASYNCHRONOUS
// Make Soup
// chop onion
// chop carrots
// boil water 10 min
// add carrots boil for 5mts
// add onion boil for 5 mts
// BROWSER: Fetch Data, Get Geolocation, setTimeout, setTimer, etc

// boilWater(1000);
// console.log('chop carrots');
// // This one will complete first, before completing boilWater()
// for (let i = 0; i < 10000; i++) {
//   console.log('still busy');
// }

// function boilWater(time) {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done.');
//   }, time);
// }

// ---------- ASYNCHRONOUS: CALLBACK HELL
// callbacks, promises, async/await
// callback hell: nesting too many callbacks

// boilWater();
// console.log('chop carrot');

// The more things we add that need to run asynchronously, the more callbacks we need to add - which leads to callback hell.
// function boilWater() {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done.');
//     console.log('add carrots');
//     setTimeout(() => {
//       console.log('carrots done');
//       setTimeout(() => {
//         console.log('onion done');
//       }, 500);
//     }, 500);
//     console.log('chop onion');
//   }, 10000);
// }

// ---------- ASYNCHRONOUS: CALLBACK HELL DOM EXAMPLE
// callbacks, promises, async/await
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// only logs after clicking the button
// callback hell: nesting one callback into another one, etc.
btn.addEventListener('click', () => {
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
});

// logs 1st
console.log('I am second');
