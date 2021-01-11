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

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;

const gridContainer = document.querySelector('.item-grid__list');

// code for adding Product Details, add directly below <ul class="hero__tags">
// <div class="hero__more-details"><a href="">Product Details</a></div>


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


const getMovieOrLicense = (movieId, licenseId) => {
  const listingType = movieId ? movies : licenses;
  const listingId = movieId ? movieId : licenseId;
  const listingPath = movieId ? 'movie' : 'license';
  const getEl = listingType.find(el => el.id === listingId);
  return `<a href="/${listingPath}/?id=${getEl.id}">${getEl.title}</a>`;
}

const getCategory = (id) => {
  const getEl = categories.find(el => el.id === id);
  return getEl.title;
};


// ------------------------------------------------------------


// ********** HERO **********

hero();


// ------------------------------------------------------------


// ********** RENDER GRID ITEMS FUNCTION **********

const renderGridItems = (itemData) => {
  const gridItems = itemData.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source type="image/avif" srcset="/img/items/${item.img}.avif">
              <img src="/img/items/${item.img}.jpg" alt="Thumbnail image for ${item.title}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <h2 class="item-grid__title"><a href="${item.url}">${item.title}</a></h2>
          <div class="item-grid__price"><span>$</span>${item.price.toFixed(2)}</div>
          <ul class="item-grid__tags">
            <li>${getMovieOrLicense(item.movie, item.license)}</li>
            <li><a href="/category/?id=${item.category}">${getCategory(item.category)}</a></li>
          </ul>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = gridItems;
};


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


// ********** RENDER GRID CATEGORIES FUNCTION **********

const renderGridCategories = (category) => {
  const categoryNavResultItems = category.map((item) => {
    const itemCount = items.filter(gridItem => gridItem.category === item.id);

    console.log('path', path);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/${path}/?id=${item.id}">
            <picture>
              <source type="image/avif" type="image/avif" srcset="/img/items/${item.img}.avif">
              <img src="/img/items/${item.img}.jpg" alt="Thumbnail image for ${item.title}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <div class="item-grid__title">${itemCount.length} Items</div>
          <h2 class="item-grid__price"><a href="/${path}/?id=${item.id}">${item.title}</a></h2>
          <a href="/${path}/?id=${item.id}" class="item-grid__button">VIEW ITEMS</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = categoryNavResultItems;
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