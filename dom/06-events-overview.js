// ---------- Click Event ----------
// select the element
// addEventListener(event, callbackFn)
// what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function () {
//   // anonymous function
//   heading.classList.add('red');
//   console.log('hey, you clicked me!');
// });

// ---------- Function Reference ----------
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// Callback Function --> being passed an an argument in another function
// function changeColors() {
//   //   console.log('hello');
//   let hasClass = heading.classList.contains('red'); // checks if the class exists (true, false)
//   // building the toggle
//   if (hasClass) {
//     heading.classList.remove('red');
//   } else {
//     heading.classList.add('red');
//   }
// }

// btn.addEventListener('click', changeColors); // remember, DO NOT invoke the callback function when you pass it as an argument! [changeColors()]

// ---------- Mouse Events ----------
// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//   console.log('you clicked me');
// });

// btn.addEventListener('mousedown', function () {
//   console.log('down');
// });

// btn.addEventListener('mouseup', function () {
//   console.log('up');
// });

// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });

// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// ---------- Key Events ----------
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keyup', function () {
//   //   console.dir(nameInput); // console.dir will give you which key (value) you pressed
//   console.log(nameInput.value);
// });

// ---------- Event Object ----------
// event object argument event
// info about triggered event
// event.type
// event.currentTarget
// this keyword (most confusing thing to understand)
// preventDefault() - prevents default behavior

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', function (event) {
//   console.log(event.currentTarget);
//   console.log(this); // 'this' points to heading element
// });

// btn.addEventListener('click', function (event) {
//   console.log(event.currentTarget);
//   event.currentTarget.classList.remove('btn');
//   event.currentTarget.classList.add('blue');
//   console.log(event.type);
// });

// function someFunc(event) {
//   // callback function
//   event.preventDefault(); // prevents page refresh
// }

// link.addEventListener('click', someFunc); // DO NOT invoke the callback function here!

// ---------- Current Target VS Target ----------
// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

// const btns = document.querySelectorAll('.btn');
// // takes a callback function
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log('currentTarget', e.currentTarget);
//     // e.currentTarget.style.color = 'green';
//     console.log('target', e.target);
//     e.target.style.color = 'green'; // identifies the single element in which the event has occured!
//   });
// });

// ---------- Event Propagation - Bubbling - Capturing ----------
// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - first at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('currentTarget', e.currentTarget);
//   console.log('Target', e.target);
//   if (e.target.classList.contains('link')) {
//     console.log('you clicked on the link');
//   }
// }

// function stopPropagation(e) {
//   e.stopPropagation();
//   console.log('you clicked on a list');
// }

// list.addEventListener('click', showBubbling, { capture: true });
// list.addEventListener('click', stopPropagation, { capture: true });
// container.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });

// ---------- Event Propagation Example ----------

// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// // const heading = document.querySelector('.heading'); // commented out to add-in dynamically

// function sayHello() {
//   console.log('Hello');
// }
// btn.addEventListener('click', function () {
//   const element = document.createElement('h1');
//   element.classList.add('heading');
//   element.textContent = 'I am inside the container';
//   container.appendChild(element);
// });

// container.addEventListener('click', function (e) {
//   if (e.target.classList.contains('heading')) {
//     console.log('hello there');
//   }
// });

// heading.addEventListener('click', sayHello);

// ---------- Forms ----------
// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevents the page from reloading
  console.log('form submitted');
  console.log('name', name.value);
  console.log('password', password.value);
});
