let _categories = [];
let _items = [];
let _licenses = [];
let _movies = [];

Promise.all([
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "category"]')}`),
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "item" && defined(category->name)]{ name, price, url, "movie": movie._ref, "category": category._ref, "license": license._ref, "imageUrl": image.asset->url }')}`),
  fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "license"]')}`),
	fetch(`https://nkto1d41.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent('*[_type == "movie"]')}`)
]).then((responses) => {
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then((data) => {
  _categories = data.find(el => el.query.includes('"category"]'));
  _categories = _categories.result;
  
  _items = data.find(el => el.query.includes('"item"'));
  _items = _items.result;
  
  _licenses = data.find(el => el.query.includes('"license"]'));
  _licenses = _licenses.result;
  
  _movies = data.find(el => el.query.includes('"movie"]'));
  _movies = _movies.result;

  renderApp();
}).catch((error) => {
	console.log(error);
});


// ------------------------------------------------------------


// Data
import categories from './data/categories.js';
import movies from './data/movies.js';
import licenses from './data/licenses.js';
import items from './data/items.js';

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

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;


// ------------------------------------------------------------


const renderApp = () => {
  
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
      return item.category === parseInt(catId);
    });

    renderGridItems(categoryResults);
  };


  // ------------------------------------------------------------


  // ********** MOVIE **********

  if (path === 'movie' && window.location.search) {
    // TODO: make this secure...?? 😬
    const movieId = new URLSearchParams(window.location.search).get('id');

    const movieResults = items.filter((item) => {
      return item.movie === parseInt(movieId);
    });

    renderGridItems(movieResults);
  };

  // ------------------------------------------------------------


  // ********** LICENSE **********

  if (path === 'license' && window.location.search) {
    // TODO: make this secure...?? 😬
    const licenseId = new URLSearchParams(window.location.search).get('id');

    const licenseResults = items.filter((item) => {
      return item.license === parseInt(licenseId);
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