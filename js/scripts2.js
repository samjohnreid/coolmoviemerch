let PROJECT_ID = "nkto1d41";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "movie"]');

let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const directors = fetch(URL)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log('Data! Weeeeee!', data);
  })
  .catch((err) => {
    console.error('Oh no!', err);
  })
;