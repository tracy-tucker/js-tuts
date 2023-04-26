// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// ---------- getElementById('element')
const h2 = document.getElementById('title');
h2.style.color = 'red';

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'red';

// ---------- getElementsByTagName('element)

// getElementsByTagName can return an HTMLCollection
// HTMLCollection = array-like object
// can use index & length property, but NO array methods
const headings = document.getElementsByTagName('h2');
// indexing
headings[1].style.color = 'green';
console.log(headings[0]);
// length
console.log(headings.length);

// querySelectorAll() --> used in most cases.
// Cleaner than getElementsByTagName()
// NodeList --> objects are collections of nodes
// can run forEach
// turn them into array --> spread operator [...]
// after that can use any array properties and methods
const items = document.getElementsByTagName('li');
items[1].style.color = 'orange';
const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});

console.log('items', items);
console.log('better items', betterItems);

// ---------- getElementsByClassName('classname')
const listItems = document.getElementsByClassName('special');
listItems[1].style.color = 'blue';
console.log(listItems);

// ---------- querySelectorAll('class')
// querySelector('any css') --> selects single
// querySelectorAll('any css') --> selects all
const result = document.querySelector('#result'); // MUST ADD proper css selector (#, .)
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item.textContent);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem.textContent);

const list = document.querySelectorAll('.special');
list.forEach(function (item) {
  console.log('specials', item.textContent);
  item.style.color = 'yellow';
});
