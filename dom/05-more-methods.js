// ---------- getAttribute() ----------
// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// const classValue = first.getAttribute('class');
// console.log(classValue);
// console.log(idValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log('showLink', showLink);

// ---------- setAttribute() ----------
// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'I also have a class of first';
// console.log(last);

// const links = document.querySelectorAll('.first');
// console.log(links);

// ---------- className ----------
// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

// second.className = 'colors text';
// second.className = 'text'; // renderes because last listed item

// ---------- classList ----------
// // third.classList.add('colors');
// // third.classList.add('text');
// third.classList.add('text', 'colors');
// const classValueB = third.classList;
// console.log(classValueB);
// third.classList.remove('text'); // removes the classList

// let result = third.classList.contains('colors');
// result ? console.log('hello world') : console.log('nope!');

// ---------- createElement('element') ----------
// ---------- createTextNode('text content') ----------
// ---------- element.appendChild(childElement) ----------

// const result = document.querySelector('#result');

// // create empty element
// const bodyDiv = document.createElement('div');
// // create textNode
// const text = document.createTextNode('a simple body div');
// // append the creation
// bodyDiv.appendChild(text); // work backwards to append to browser
// document.body.appendChild(bodyDiv); // work backwards to append to browser

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.appendChild(heading);
// console.log(result.children);

// ---------- insertBefore('element', 'location') ----------

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');

// // create empty element
// const bodyDiv = document.createElement('div');
// // create textNode
// const text = document.createTextNode('a simple body div');
// // insertBefore
// bodyDiv.appendChild(text); // work backwards to append to browser
// document.body.insertBefore(bodyDiv, result);
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.insertBefore(heading, first);
// console.log(result.children);

// ---------- element.replaceChild('new', 'old') ----------
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode('I am a small heading');
// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);

// ---------- prepend ----------
// ---------- innerText ----------
// const heading = document.createElement('h2');
// heading.innerText = `i am a dynamic heading`;
// document.body.prepend(heading);

// ---------- remove ----------
// ---------- removeChild ----------
// const result = document.querySelector('#result');
// // result.remove();

// const heading = result.querySelector('h1');
// result.removeChild(heading);
// console.log(heading);

// ---------- innerHTML ----------
// ---------- textContent ----------
// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(div.textContent); // logs text
// console.log(list.innerHTML); // logs entire HTML structure for that element

// const ul = document.createElement('ul');
// ul.innerHTML = `
//     <li class="item">list item</li>
// `;
// document.body.appendChild(ul);

// div.textContent = 'hello world';
// div.innerHTML = 'hello people'; // this one adds propery HTML structure

// ---------- CSS ----------
const random = document.querySelector('.random');
console.log(random.style);

// Typing out CSS this way is way too long!
// Plus, you want to separate concerns (JS vs CSS)
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

random.classList.add('title');
