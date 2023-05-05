// ---------- ASYNC/AWAIT
// Async/Await --> waits until the promise is settled, either result or reject.
// Async ALWAYS uses a promise. This is why you can use .then()
// must have async
// await waits till promise is settled
// error handling -->  try/catch

// Syntax usage 1
// async function someFunction() {
//     await
// }

// Syntax usage 2
// const otherFunction = async() => {
//     await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  await addColor(1000, heading1, 'red');
  //   try {
  //     const first = addColor(1000, heading1, 'red');
  //     await addColor(1000, heading2, 'green');
  //     await addColor(1000, heading3, 'blue');
  //     console.log(first);
  //   } catch (error) {
  //     console.log(error);
  //   }
  displayColor().then();
});

async function displayColor() {
  try {
    const first = addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log(first);
  } catch (error) {
    console.log(error);
  }
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        // for this, no data so nothing to pass in to resolve()
        resolve('hello');
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
