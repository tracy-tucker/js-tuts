// Date

const months = [
  "January", // begins with 0
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday", // Starts with 0
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]); // Dynamically set the month using square bracket notation (see Reduce Array Iterators challenge 2)

const day = date.getDay();
console.log(days[day]); // Dynamically set the day using square bracket notation (see Reduce Array Iterators challenge 2)

console.log(date.getDate()); // Retrieves the number date
console.log(date.getFullYear()); // Retrieves the number year

const sentence = `${days[day]}, ${
  months[month]
} ${date.getDate()}, ${date.getFullYear()}`;

console.log(sentence);
document.body.innerHTML = sentence;
