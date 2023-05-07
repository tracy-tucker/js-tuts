// ---------- FETCH
// Fetch --> built-in. Just like XHR
// Promise-based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just an alternative approach that has simpler and cleaner syntax. The end result is the same. Still get data dynamically, behind the scenes.

const url = './ajax/api/people.json';

// Explicit Return Example
// fetch(url)
//   .then((resp) => {
//     // returns a response object
//     // useful properties and methods
//     // converts response into JSON data
//     // return promise
//     console.log(resp);
//     // returns another promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// Implicit Return Example
// fetch(url).then((response) =>
//   response
//     .json()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// );

// The first response is what catches any errors.

// ---------- FETCH WITH FUNCTION

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// ---------- FETCH WITH ASYNC/AWAIT

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   displayItems(data);
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join('');
//   const element = document.createElement('div');
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// ---------- FETCH WITH TRY/CATCH

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
