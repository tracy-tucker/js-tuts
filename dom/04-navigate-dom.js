// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// ---------- CHILDREN ----------

// childNodes --> returns all childNodes including whitespace which is treated as a text node

// children
// const result = document.querySelector("#result");
// // childNodes includes EVERYTHING (ie, li and text)
// const allChildren = result.childNodes;
// console.log(allChildren);
// const children = result.children;
// console.log("children", children);

// // firstChild
// const firstChild = result.firstChild;
// console.log(firstChild); // returns whitespace

// // lastChild
// const lastChild = result.lastChild;
// console.log(lastChild); // returns whitespace

// ---------- parentElement ----------
// const heading = document.querySelector("h2");
// console.log(heading.parentElement);
// const parent = heading.parentElement;
// parent.style.color = "red";

// ---------- nextSibling previousSibling ----------
// const first = document.querySelector(".first");
// first.nextElementSibling.style.color = "red";
// console.log(first);
// const second = first.nextSibling;
// console.log(second);

// const last = document.querySelector("#last");
// last.previousElementSibling.style.color = "purple";
// const third = last.previousSibling.previousSibling;
// console.log(third); logs list item # 3

// ---------- nextElementSibling previousElementSibling ----------
// const first = document.querySelector('.first');
// first.nextElementSibling.style.color='red'
// const last = document.querySelector('#last');

// ---------- textContent nodeValue ----------
// nodeValue
const item = document.getElementById('special');
const value = item.nodeValue;
// to get the text value
// option 1
console.log(item.childNodes[0].nodeValue);
// option 2
console.log(item.firstChild.nodeValue);

// textContent
const easyValue = item.textContent;
// get the text value right away
console.log(easyValue);
