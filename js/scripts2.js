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

let categories = [];
let items = [];
let licenses = [];
let movies = [];

Promise
  .all([categoriesPromise, itemsPromise, licensesPromise, moviesPromise])
  .then((responses) => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then((data) => {
    categories = data.find(el => el.query.includes('"category"]')).result;
    items = data.find(el => el.query.includes('"item"')).result;
    licenses = data.find(el => el.query.includes('"license"]')).result;
    movies = data.find(el => el.query.includes('"movie"]')).result;

    console.log('categories:', categories);
    console.log('items:', items);
    console.log('licenses:', licenses);
    console.log('movies:', movies);
  })
;