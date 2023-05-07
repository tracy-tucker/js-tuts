// ---------- AJAX
// AJAX --> Asynchronous JavaScript and XML
// resource: https://www.w3schools.com/xml/ajax_intro.asp
// HTTP Requests --> Communication between client and server
// resource: https://www.w3schools.com/tags/ref_httpmethods.asp
// API --> Application Programming Interface
// resource: https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/

// XMLHttpRequest --> used to interact with servers. Retrieve data from a URL without having to do a full page refresh. It only updates part of a page so to not interrupt what the user is doing.
// open() --> initializes a newly-created request/re-initializes an existing one.
// open --> takes in parameters:
// --> method (GET, POST, PUT, DELETE, ETC)
// --> URL representing the URL to send the request to
// --> async --> optional, but it is the dafault.
// --> user
// --> password
// onReadyStateChange --> callback function that runs once the ready state is ready to go (4).

// ----- XHR WAY = OLDER, LONGER WAY -----

// the variable can be whatever name you want
const xhr = new XMLHttpRequest();
console.log(xhr); // ready state 0

xhr.open('GET', './ajax/api/sample.txt'); // ready state 1
console.log('open', xhr);

xhr.onreadystatechange = function () {
  console.log('readyState', xhr);
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    });
  }
};

xhr.send();

console.log('hello world'); // this logs BEFORE XHR methods!

// ready state: 0 = UNSENT: open not called yet

// ready state: 1 = OPENED: open has been called

// ready state 2 = READERS_RECEIVED: send() has been called, and headers and status are available

// ready state 3 = LOADING (200): Downloading, responseText holds partial data

// ready state 4 = DONE (200): The operation is complete.

// ---------- HTTPREQUEST WITH A BUTTON

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr); // ready state 0

  xhr.open('GET', './ajax/api/sample.txt'); // ready state 1
  console.log('open', xhr);

  xhr.onreadystatechange = function () {
    console.log('readyState', xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };

  xhr.send();
}
