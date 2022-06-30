// Functions
import metaData from './functions/metaData.js';
import mobileNavMenu from './functions/mobileNavMenu.js';
import movieQuotes from './functions/movieQuotes.js';
import subhead from './functions/subhead.js';
import auxPages from './functions/auxPages.js';
import hero from './functions/hero.js';

// Helpers
import renderGridItems from './helpers/renderGridItems.js';
import renderGridCategories from './helpers/renderGridCategories.js';
import cacheBustData from './helpers/cacheBustData.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;


// ------------------------------------------------------------


const renderApp = () => {

  
  const categoriesGet = localStorage.getItem('categoriesSet');
  categories = JSON.parse(categoriesGet);

  const itemsGet = localStorage.getItem('itemsSet');
  items = JSON.parse(itemsGet);

  const licensesGet = localStorage.getItem('licensesSet');
  licenses = JSON.parse(licensesGet);

  const moviesGet = localStorage.getItem('moviesSet');
  movies = JSON.parse(moviesGet);


  // ------------------------------------------------------------


  // Page Titles and Meta Descriptions

  metaData();


  // ------------------------------------------------------------


  // Mobile nav menu

  mobileNavMenu();


  // ------------------------------------------------------------


  // Movie quotes for search placeholder

  movieQuotes();


  // ------------------------------------------------------------


  // ********** HERO **********

  hero();


  // ------------------------------------------------------------


  // ********** HOMEPAGE **********

  if (path === 'home') {
    const featuredResults = items.filter((item) => {
      return item.featured === true;
    });
    
    renderGridItems(featuredResults);
  };


  // ------------------------------------------------------------


  // ********** SEARCH RESULTS **********

  if (path === 'search-results') {
    // TODO: make this secure...?? 😬
    const searchQuery = new URLSearchParams(window.location.search).get('search').toLowerCase();

    const searchResults = items.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery);
    });

    localStorage.setItem('searchResultsCount', searchResults.length);

    renderGridItems(searchResults);
  };


  // ------------------------------------------------------------


  // ********** CATEGORY **********

  if (path === 'category' && window.location.search) {
    // TODO: make this secure...?? 😬
    const catId = new URLSearchParams(window.location.search).get('id');
    
    const categoryResults = items.filter((item) => {
      return item.category === catId;
    });

    renderGridItems(categoryResults);
  };


  // ------------------------------------------------------------


  // ********** MOVIE **********

  if (path === 'movie' && window.location.search) {
    // TODO: make this secure...?? 😬
    const movieId = new URLSearchParams(window.location.search).get('id');

    const movieResults = items.filter((item) => {
      return item.movie === movieId;
    });

    renderGridItems(movieResults);
  };

  // ------------------------------------------------------------


  // ********** LICENSE **********

  if (path === 'license' && window.location.search) {
    // TODO: make this secure...?? 😬
    const licenseId = new URLSearchParams(window.location.search).get('id');

    const licenseResults = items.filter((item) => {
      return item.license === licenseId;
    });

    renderGridItems(licenseResults);
  };


  // ------------------------------------------------------------


  // ********** UNDER $10 & $20 NAVIGATION **********

  if (path === 'under10' || path === 'under20') {  
    const underNResults = items.filter((item) => {
      const amount = path === 'under10' ? 10 : 20;
      return item.price < amount;
    });
    
    renderGridItems(underNResults);
  };


  // ------------------------------------------------------------


  // ********** CATEGORIES NAVIGATION **********

  path === 'category' && !window.location.search && renderGridCategories(categories);


  // ------------------------------------------------------------


  // ********** MOVIES NAVIGATION **********

  path === 'movie' && !window.location.search && renderGridCategories(movies);


  // ------------------------------------------------------------


  // ********** LICENSES NAVIGATION **********

  path === 'license' && !window.location.search && renderGridCategories(licenses);


  // ------------------------------------------------------------


  // ********** SUBHEAD **********

  subhead();


  // ------------------------------------------------------------


  // ********** AUXILIARY PAGES **********

  auxPages();


}


// ------------------------------------------------------------


// Data
let categories = [];
let items = [];
let licenses = [];
let movies = [];

const localStorageCheck = localStorage.getItem('dataStoredLocally');
const forceNewDataFetch = new URLSearchParams(window.location.search).has('cache');

if (!localStorageCheck || cacheBustData(localStorage.getItem('timeStamp')) || forceNewDataFetch) {
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
    localStorage.setItem('categoriesSet', JSON.stringify(categories.result));
    
    items = data.find(el => el.query.includes('"item"'));
    localStorage.setItem('itemsSet', JSON.stringify(items.result));
    
    licenses = data.find(el => el.query.includes('"license"]'));
    localStorage.setItem('licensesSet', JSON.stringify(licenses.result));
    
    movies = data.find(el => el.query.includes('"movie"]'));
    localStorage.setItem('moviesSet', JSON.stringify(movies.result));

    localStorage.setItem('dataStoredLocally', true);
    localStorage.setItem('timeStamp', new Date());
  
    renderApp();
  }).catch((error) => {
    console.log(error);
  });
} else {
  renderApp();
}