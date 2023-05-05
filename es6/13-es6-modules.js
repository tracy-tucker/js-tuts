// ---------- ES6 MODULES
// Provide structure
// Split code into smaller files
// Share code across app
// Same as React
// Use server extension locally - MUST use local server (Go Live VSCode ext) extension!
// Used in projects

// named imports
import { random, people } from './utils/data.js';
// default imports
import showPeople from './components/showPeople.js';
import get from './utils/getElement.js';

// global name space example
// const people = [
//   {
//     name: 'john',
//     job: 'developer',
//   },
//   {
//     name: 'susan',
//     job: 'designer',
//   },
//   {
//     name: 'anna',
//     job: 'boss',
//   },
// ];

const container = get('.container');
const btn = get('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
