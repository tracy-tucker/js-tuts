// ---------- ASYNCHRONOUS: PROMISES
// callbacks, promises, async/await
// PROMISES --> Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {});

// // common naming of parameters is resolve, reject.
// // but, you can name these whatever you want
// const promise = new Promise((resolve, reject) => {
//   let value = false;
//   if (value) {
//     // resolve() carries whatever is returned from the promise
//     resolve('hey value is true');
//   } else {
//     reject(`there was an error, value is false`);
//   }
// });
// // How to access what resolve() is holding on to
// // whatever you parameter you set within the .then() represents what is being held in resolve().
// // You can name it whatever you want, commonly named data
// promise
//   .then((data) => {
//     console.log(data); // logs 'hey value is true'
//   }) // .catch() will log any errors if promise is not fulfilled
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(promise);

// ---------- ASYNCHRONOUS: PROMISES DOM EXAMPLE

btn.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(3000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        // for this, no data so nothing to pass in to resolve()
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
