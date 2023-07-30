let categories = [];
let items = [];
let licenses = [];
let movies = [];

const dataFetchedEvent = new Event('dataFetched');

Promise.all([
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "category"]{_id, name, "imageUrl": image.asset->url}')}`),
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "item" && defined(category->name)]{name, price, url, "movie": movie._ref, "category": category._ref, "license": license._ref, "imageUrl": image.asset->url, featured, hero, "heroImageThumbUrl": heroImageThumb.asset->url, "heroImageDesktopUrl": heroImageDesktop.asset->url, "heroImageTabletUrl": heroImageTablet.asset->url, "heroImageMobileUrl": heroImageMobile.asset->url}')}`),
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "license"]{_id, name, "imageUrl": image.asset->url}')}`),
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "movie"]{_id, name, year, directors, genre, "imageUrl": poster.asset->url}')}`)
]).then((responses) => {
  return Promise.all(responses.map(function (response) {
    return response.json();
  }));
}).then((data) => {
  categories = data.find(el => el.query.includes('"category"]'));
  categories = categories.result;

  items = data.find(el => el.query.includes('"item"'));
  items = items.result;
  
  licenses = data.find(el => el.query.includes('"license"]'));
  licenses = licenses.result;
  
  movies = data.find(el => el.query.includes('"movie"]'));
  movies = movies.result;
  
  window.dispatchEvent(dataFetchedEvent);
}).catch((error) => {
  console.log(error);
});

export { categories, items, licenses, movies };