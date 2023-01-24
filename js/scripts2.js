let PROJECT_ID = "nkto1d41";
let DATASET = "production";
let QUERY_CATEGORIES = encodeURIComponent('*[_type == "category"]');
let QUERY_ITEMS = encodeURIComponent('*[_type == "item"]');
let QUERY_LICENSES = encodeURIComponent('*[_type == "license"]');
let QUERY_MOVIES = encodeURIComponent('*[_type == "movie"]');

const categories = fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_CATEGORIES}`)
  .then(data => data.json())
  .then(data => console.log('Data for Categories:', data))
  .catch(err => console.error('Oh no!', err))
;

const items = fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_ITEMS}`)
  .then(data => data.json())
  .then(data => {
    console.log('Data for Items:', data);
    console.log('hello');
    const dataItems = data;
    return dataItems;
  })
  .then((dataItems) => {
    console.log('dataItems: ', dataItems);
  })
  .catch(err => console.error('Oh no!', err))
;

const licenses = fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_LICENSES}`)
  .then(data => data.json())
  .then(data => console.log('Data for Licenses:', data))
  .catch(err => console.error('Oh no!', err))
;

const movies = fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_MOVIES}`)
  .then(data => data.json())
  .then(data => console.log('Data for Movies:', data))
  .catch(err => console.error('Oh no!', err))
;

console.log('categories', categories);
console.log('items', items);
console.log('licenses', licenses);
console.log('movies', movies);
console.log('dataItems: ', dataItems);