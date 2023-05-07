// ---------- JSON
// JSON --> JavaScript Object Notation
// Properties/Keys MUST be in double-quotes, unless value is number

const btn = document.querySelector('.btn');
const url = './ajax/api/people.json';
btn.addEventListener('click', () => {
  getData(url);
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr); // ready state 0

  xhr.open('GET', url); // ready state 1
  console.log('open', xhr);

  xhr.onreadystatechange = function () {
    console.log('readyState', xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  xhr.send();
}
