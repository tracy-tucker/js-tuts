// ---------- STRING INCLUDES
// String includes() --> checks if a string contains another string.
// useful for search inputs!

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chain' },
];

const firstName = 'john';

const result = firstName.includes('john');
console.log(result); // logs true

const result2 = firstName.includes('peter');
console.log(result2); // logs false

// .includes(element, start)
// element --> required. The value to search or
// start --> optional. Start position. Default is 0
const result3 = firstName.includes('j', 0);
console.log(result3); // logs true

const result4 = firstName.includes('j', 1);
console.log(result4); // logs false

const result5 = products.includes('Le');
console.log(result5); // logs false

const text = 'a';
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts); // logs 3 objects from Products

// ---------- ARRAY INCLUDES
// Arracy includes() --> checks if the item is an array
// useful in the conditionals statements

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
let randomItem2 = 'milk';

const isIncluded = groceries.includes(randomItem);
console.log(isIncluded); // logs false

const isIncluded2 = groceries.includes(randomItem2);
console.log(isIncluded2); // logs true

if (groceries.includes(randomIem)) {
  console.log(`Yeah! it's on the list`);
}
