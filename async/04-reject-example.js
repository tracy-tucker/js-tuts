// ---------- ASYNCHRONOUS: REJECT EXAMPLE

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://picsum.photos/1000';

btn.addEventListener('click', () => {
  loadImage(url).then((data) => container.appendChild(data));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    // if it works, then use this one
    img.addEventListener('load', () => {
      resolve(img);
    });
    // it not, then use this one
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
}
