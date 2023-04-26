// ---------- Local Storage ----------
// Web Storage API - provided by browser
// session storage, local storage
// setItem(key, value), getItem, removeItem, clear

// localStorage.setItem('name', 'john'); // keeps the info in between the opening and closing of the browser (amazon shopping)
// sessionStorage.setItem('name', 'john'); // keeps the info while the tab is open. New tab would not have stored values

// localStorage.setItem('name', 'Tucker');
// localStorage.setItem('name', 'Tracy'); // Overrides 'Tucker' entry because same key being used
// localStorage.setItem('lastName', 'Tucker');
// const name = localStorage.getItem('name');
// console.log('name', name);
// localStorage.removeItem('name');
// const anotherName = localStorage.getItem('name');
// console.log(anotherName); // logs null because we removed it.
// localStorage.clear(); // clears out localStorage

// ---------- Local Storage with Multiple Values ----------
// JSON.stringify(), JSON.parse()

// const friends = ['john', 'peter', 'bobby'];

// // localStorage.setItem('friends', friends);
// // const values = localStorage.getItem('friends');
// // console.log(values[0]); // logs the letter 'j' only

// localStorage.setItem('friends', JSON.stringify(friends)); // stores values as an array
// const values = JSON.parse(localStorage.getItem('friends')); // converts the JSON string into a readable format
// // ex: if you had an array, you'll get back an array. Object? You'll get back an object.
// console.log(values[0]);

// let fruits;
// if (localStorage.getItem('fruits')) {
//   fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//   fruits = [];
// }

// console.log('fruits', fruits);
// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));
// console.log('fruits', fruits);

// ---------- setTimeout ----------
// setTimeout(func, timer) - runs function once after specific time
// pass function reference
// duration in ms (1000 ms = 1 second)
// default 0
// returns unique identifier
// clearTimeout to cancel
// on window object

// function sayHello() {
//   console.log('hello tracy');
// }

// // setTimeout(sayHello(), 1000); // WILL NOT WORK! DO TO INVOKE THE FUNCTION!
// setTimeout(sayHello, 1000);

// // alternative approach, ES6 arrow functions
// // setTimeout(function () {
// //   console.log('hello troy');
// // }, 2000);

// // pass arguments
// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// // setTimeout(showScore, 1000, 'tony', 34); // 'tony' and 34 are the parameters for the passed-in function

// const firstID = setTimeout(showScore, 1000, 'tony', 34);
// const secondID = setTimeout(showScore, 1000, 'peter', 88);
// console.log(firstID);
// console.log(secondID);

// clearTimeout(firstID); // prevents firstID from running

// ---------- setInterval ----------
// setInterval - runs function repeatedly, at specific intervals
// pass function reference
// duration is ms (1000 ms = 1 second)
// default 0
// returns unique identifier
// clearInterval to cancel

// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// const firstID = setInterval(showScore, 2000, 'bobo', 45);
// const secondID = setInterval(showScore, 2000, 'susan', 88);

// clearInterval(firstID); // prevents firstID from running

// ---------- DOMContentLoaded ----------
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// window.addEventListener('DOMContentLoaded', function () {
//     // your code goes here
// });

// document.addEventListener....

// window.addEventListener('DOMContentLoaded', function () {
//   const heading = this.document.querySelector('h1');
//   console.log('hello');
//   heading.style.color = 'red';
// });

// ---------- Events - "load" ----------
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

// window.addEventListener('load', function () {
//     // your code goes here
// });

// window.addEventListener('load', function () {
//   console.log('I will run second');
//   const img = this.document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// window.addEventListener('DOMContentLoaded', function () {
//   console.log('I will run first');
//   const img = this.document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// ---------- Events - "scroll" ----------
// Scroll Event - on element or document

// window.addEventListener('scroll', function() {
//     console.log(window.scrollY + 'px');
//     console.log(window.scrollX + 'px');
// })

// document.addEventListener...

// scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffeset)

// scrollX - returns the number of pixels the document is currently scrolled along the horizontal axis (pageXOffeset)

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY + 'px');
//   console.log(window.scrollX + 'px');
// });
// you can only trigger this type of event IF you can scroll!

// ---------- Width, Height, GetBoundingClientRect ----------
/*
InnerWidth - the read-only Window property the interior width of the window in pixels.

InnerHeight - the read-only Window property the interior height of the window in pixels.

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
*/

// console.log('height: ' + window.innerHeight);
// console.log('width: ' + window.innerWidth);

// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');

// btn.addEventListener('click', function () {
//   const values = box.getBoundingClientRect();
//   console.log('value', values);
// });

// ---------- Events - "resize" ----------
// The resize event fires when the document view (window) has been resized.

// window.addEventListener('resize', function () {
//   console.log(window.innerWidth);
// });
