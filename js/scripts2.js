const PROJECT_ID = "nkto1d41";
const DATASET = "production";
const API_PATH = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`;

const QUERY_CATEGORIES = encodeURIComponent('*[_type == "category"]');
const QUERY_ITEMS = encodeURIComponent('*[_type == "item"]');
const QUERY_LICENSES = encodeURIComponent('*[_type == "license"]');
const QUERY_MOVIES = encodeURIComponent('*[_type == "movie"]');

const categoriesPromise = fetch(`${API_PATH}${QUERY_CATEGORIES}`);
const itemsPromise = fetch(`${API_PATH}${QUERY_ITEMS}`);
const licensesPromise = fetch(`${API_PATH}${QUERY_LICENSES}`);
const moviesPromise = fetch(`${API_PATH}${QUERY_MOVIES}`);

Promise
  .all([categoriesPromise, itemsPromise, licensesPromise, moviesPromise])
  .then((responses) => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then((responses) => {
    console.log('responses:', responses);
  })
;











// const prom1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(['one', 'two', 'three']);
//   }, 1000);
// });

// const prom2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({name: 'Sam', age: 44, country: 'UK and USA'});
//   }, 3000);
// });

// const prom3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(['four', 'five', 'six']);
//   }, 5000);
// });

// prom1.then((data) => {
//   console.log(data);
// });

// prom2.then((data) => {
//   console.log(data);
// });

// prom3.then((data) => {
//   console.log(data);
// });

// Promise
//   .all([prom1, prom2, prom3])
//   .then((responses) => {
//     console.log('all promises fulfilled!', responses[2]);
//   });