const el = document.getElementById('samapp');

// **********

let PROJECT_ID = "";
let DATASET = "";

const query = `*[_type == "item" && defined(category->name)]{
    name,
    price,
    url,
    "movie": movie._ref,
    "category": category._ref,
    "license": license._ref,
    "imageUrl": image.asset->url
}`;
let QUERY_ITEMS = encodeURIComponent(query);

let URL_ITEMS = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_ITEMS}`;

let items = [];

fetch(URL_ITEMS)
.then((res) => res.json())
.then(({ result }) => {
  items = result;
  renderItems(items);
})
.catch((err) => console.error(err));

// **********

let categories = [];

let QUERY_CATEGORIES = encodeURIComponent('*[_type == "category"]');
let URL_CATEGORIES = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_CATEGORIES}`;
fetch(URL_CATEGORIES)
.then((res) => res.json())
.then(({ result }) => {
  categories = result;
})
.catch((err) => console.error(err));

const getCategory = (categoryId) => {
    const category = categories.find(el => el._id === categoryId);
    return category.name;
}

// **********

let movies = [];
let licenses = [];

let QUERY_MOVIES = encodeURIComponent('*[_type == "movie"]');
let URL_MOVIES = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_MOVIES}`;
fetch(URL_MOVIES)
.then((res) => res.json())
.then(({ result }) => {
    movies = result;
})
.catch((err) => console.error(err));

let QUERY_LICENSES = encodeURIComponent('*[_type == "license"]');
let URL_LICENSES = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_LICENSES}`;
fetch(URL_LICENSES)
.then((res) => res.json())
.then(({ result }) => {
    licenses = result;
})
.catch((err) => console.error(err));

const getMovieOrLicense = (movieId, licenseId) => {
    let movieOrLicense = '';
    if (movieId) {
        movieOrLicense = movies.find(el => el._id === movieId);
    } else {
        movieOrLicense = licenses.find(el => el._id === licenseId);
    }
    return movieOrLicense.name;
}

// **********

const renderItems = (items) => {
    const itemsList = items.map((item) => {
        return `
            <li style="margin-bottom: 20px;">
                <div style="padding-bottom: 5px;">Name: ${item.name}</div>
                <div style="padding-bottom: 5px;">Price: $${item.price}</div>
                <div style="padding-bottom: 5px;">URL: <a href="${item.url}">[link]</a></div>
                <div style="padding-bottom: 5px;">Category: ${getCategory(item.category)}</div>
                <div style="padding-bottom: 5px;">Movie, or Licence: ${getMovieOrLicense(item.movie, item.license)}</div>
                <div style="display: flex;">Image: <img src="${item.imageUrl}" width="100" /></div>
            </li>
        `;
    }).join('');

    el.innerHTML = itemsList;
}