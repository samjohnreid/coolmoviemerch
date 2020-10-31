import movies from '../data/movies.js';
import categories from '../data/categories.js';
import licenses from '../data/licenses.js';
import heroes from '../data/heroes.js';
import grid from '../data/grid.js';
import quotes from '../data/quotes.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;
const aux = appContainer.dataset.aux;

const gridContainer = document.querySelector('.item-grid__list');


// ------------------------------------------------------------


// Mobile nav menu

const navMenu = document.querySelector('.masthead__nav');
const toggleMenu = () => {
  navMenu.classList.toggle('masthead__nav--active');
};

document.addEventListener('click', (event) => {
  if (!event.target.matches('.masthead__hamburger')) return;
  toggleMenu();
});


// ------------------------------------------------------------


// Movie quotes for search placeholder

const searchBar = document.querySelector('.masthead__search');
const searchField = searchBar.querySelector('input');

// Set movie quote randomly from array of movie quotes
const movieQuotes = quotes;
searchBar.dataset.movieQuotePlaceholder = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];

// Grab the current quote so we can hide it when search is being used, and restore when empty again
const currentQuote = searchBar.dataset.movieQuotePlaceholder;
searchField.addEventListener('blur', (e) => {
  searchBar.dataset.movieQuotePlaceholder = e.target.value.length > 0 ? '' : currentQuote;
});


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

const activateFirstSlide = slideNum => slideNum === 0 ? 'hero__product--active' : '';

const heroItems = heroes.map((hero, index) => {
  return `
    <li class="hero__product ${activateFirstSlide(index)}" data-hero-item="${index+1}">
      <div class="hero__image">
        <picture>
          <source srcset="/img/items/hero/${hero.img}.jpg" media="(min-width: 1200px)">
          <source srcset="/img/items/hero/tablet/${hero.img}.jpg" media="(min-width: 768px)">
          <source srcset="/img/items/hero/mobile/${hero.img}.jpg">
          <img src="/img/items/hero/${hero.img}.jpg" alt="" loading="lazy">
        </picture>
      </div>
      <div class="hero__details">
        <h2 class="hero__title"><a href="${hero.url}">${hero.title}</a></h2>
        <div class="hero__price"><span>$</span>${hero.price.toFixed(2)}</div>
        <ul class="hero__tags">
          <li>${getMovieOrLicense(hero.movie, hero.license)}</li>
          <li><a href="/category/?id=${hero.category}">${getCategory(hero.category)}</a></li>
        </ul>
        <div class="hero__more-details"><a href="">Product Details</a></div>
        <a href="${hero.url}" class="hero__button">BUY NOW</a>
      </div>
    </li>
  `;
}).join('');

const heroNavItems = heroes.map((hero, index) => {
  return `
    <li>
      <button data-hero-nav-item="${index+1}">
        <picture>
          <source srcset="/img/items/hero/thumb/${hero.img}.jpg">
          <img src="/img/items/hero/thumb/${hero.img}.jpg" alt="" loading="lazy">
        </picture>
      </button>
    </li>
  `;
}).join('');

const heroContainer = document.querySelector('.hero__products');
const heroNavContainer = document.querySelector('.hero__nav');

if (heroContainer) {
  heroContainer.innerHTML = heroItems;
  heroNavContainer.innerHTML = heroNavItems;
};

// Hero navigation

const heroSlides = document.querySelectorAll('.hero__product');

const heroNav = (target) => {
  heroSlides.forEach((slide) => {
    slide.classList.remove('hero__product--active');
    slide.dataset.heroItem === target && slide.classList.add('hero__product--active');
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.matches('.hero__nav li button')) return;
  heroNav(e.target.dataset.heroNavItem);
});


// ------------------------------------------------------------


// ********** HOMEPAGE **********

if (path === 'home') {
  const featuredResults = grid.filter((item) => {
    return item.featured === true;
  });
  
  const gridItems = featuredResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = gridItems;
};


// ------------------------------------------------------------


// ********** SEARCH RESULTS **********

if (path === 'search-results') {
  // TODO: make this secure...?? 😬
  const searchQuery = new URLSearchParams(window.location.search).get('search').toLowerCase();

  const searchResults = grid.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery);
  });

  const searchResultItems = searchResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = searchResultItems;
};


// ------------------------------------------------------------


// ********** CATEGORY **********

if (path === 'category' && window.location.search) {
  // TODO: make this secure...?? 😬
  const catId = new URLSearchParams(window.location.search).get('id');

  const categoryResults = grid.filter((item) => {
    return item.category === parseInt(catId);
  });

  const categoryResultItems = categoryResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = categoryResultItems;
};


// ------------------------------------------------------------


// ********** MOVIE **********

if (path === 'movie' && window.location.search) {
  // TODO: make this secure...?? 😬
  const movieId = new URLSearchParams(window.location.search).get('id');

  const movieResults = grid.filter((item) => {
    return item.movie === parseInt(movieId);
  });

  const movieResultItems = movieResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = movieResultItems;
};

// ------------------------------------------------------------


// ********** LICENSE **********

if (path === 'license' && window.location.search) {
  // TODO: make this secure...?? 😬
  const licenseId = new URLSearchParams(window.location.search).get('id');

  const licenseResults = grid.filter((item) => {
    return item.license === parseInt(licenseId);
  });

  const licenseResultItems = licenseResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = licenseResultItems;
};


// ------------------------------------------------------------


// ********** SUBHEAD **********

if (path !== 'home') {
  
  const subheadContainer = document.querySelector('.subhead');
  
  const pageId = new URLSearchParams(window.location.search).get('id');
  
  const titleMap = new Map([
    ['category', categories],
    ['movie', movies],
    ['license', licenses],
  ]);
  
  const getTitle = (id) => {
    if (!pageId) {
      if (path === 'search-results') {
        // TODO: make this secure...?? 😬
        const searchQuery = new URLSearchParams(window.location.search).get('search');
        const searchResultsCount = grid.filter((item) => {
          return item.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        const searchResultsTitle = `<span>Search for </span>&ldquo;${searchQuery}&rdquo; <small>(${searchResultsCount.length} results)</small>`;
        return searchResultsTitle;
      }
      switch (path) {
        case 'category': return 'Categories';
        case 'movie': return 'Movies';
        case 'license': return 'Licenses';
        case 'under10': return 'Under $10';
        case 'under20': return 'Under $20';
        case 'search-results': return searchTitle();
        case 'about': return 'About Cool Movie Merch';
        case 'contact': return 'Contact Cool Movie Merch';
        case 'privacy': return 'Privacy Policy';
        case 'terms': return 'Terms of Use';
      }
    }
    const getEl = titleMap.get(path).find(el => el.id === id);
    return getEl.title;
  }

  const subheadTitle = `<h1 class="subhead__title">${getTitle(parseInt(pageId))}</h1>`;

  subheadContainer.innerHTML = subheadTitle;
};


// ------------------------------------------------------------


// ********** CATEGORIES NAVIGATION **********

if (path === 'category' && !window.location.search) {  
  const categoryNavResultItems = categories.map((item) => {
    const itemCount = grid.filter(gridItem => gridItem.category === item.id);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/category/?id=${item.id}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
              <img src="/img/items/${item.img}.jpg" alt="Thumbnail image for ${item.title}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <div class="item-grid__title">${itemCount.length} Items</div>
          <h2 class="item-grid__price"><a href="/category/?id=${item.id}">${item.title}</a></h2>
          <a href="/category/?id=${item.id}" class="item-grid__button">VIEW ITEMS</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = categoryNavResultItems;
};


// ------------------------------------------------------------


// ********** MOVIES NAVIGATION **********

if (path === 'movie' && !window.location.search) {  
  const movieNavResultItems = movies.map((item) => {
    const itemCount = grid.filter(gridItem => gridItem.movie === item.id);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/movie/?id=${item.id}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
              <img src="/img/items/${item.img}.jpg" alt="Thumbnail image for ${item.title}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <div class="item-grid__title">${itemCount.length} Items</div>
          <h2 class="item-grid__price"><a href="/movie/?id=${item.id}">${item.title}</a></h2>
          <a href="/movie/?id=${item.id}" class="item-grid__button">VIEW ITEMS</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = movieNavResultItems;
};


// ------------------------------------------------------------


// ********** LICENSES NAVIGATION **********

if (path === 'license' && !window.location.search) {  
  const licenseNavResultItems = licenses.map((item) => {
    const itemCount = grid.filter(gridItem => gridItem.license === item.id);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/license/?id=${item.id}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
              <img src="/img/items/${item.img}.jpg" alt="Thumbnail image for ${item.title}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <div class="item-grid__title">${itemCount.length} Items</div>
          <h2 class="item-grid__price"><a href="/license/?id=${item.id}">${item.title}</a></h2>
          <a href="/license/?id=${item.id}" class="item-grid__button">VIEW ITEMS</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = licenseNavResultItems;
};


// ------------------------------------------------------------


// ********** UNDER $10 & $20 NAVIGATION **********

if (path === 'under10' || path === 'under20') {  
  const underNResults = grid.filter((item) => {
    const amount = path === 'under10' ? 10 : 20;
    return item.price < amount;
  });
  
  const underNResultItems = underNResults.map((item) => {
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="${item.url}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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
          <div class="item-grid__more-details"><a href="">Product Details</a></div>
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = underNResultItems;
};


// ------------------------------------------------------------


// ********** AUXILIARY PAGES **********

if (aux === 'true') {
  
  const auxContainer = document.querySelector('.aux');

  let auxContent;

  const auxContentAbout = `
    <p>sadasdasdd</p>
    <h3>about content goes here</h3>
    <p>blah blah blah etc</p>
  `;

  const auxContentPrivacy = `
    [ privacy content here ]
  `;

  const auxContentContact = `
    [ contact content here ]
  `;

  const auxContentTerms = `
    [ terms content here, stuff about price change etc. - hopefully safeguard against litigation! ]
  `;

  if (path === 'about') {
    auxContent = auxContentAbout;
  } else if (path === 'privacy') {
    auxContent = auxContentPrivacy;
  } else if (path === 'contact') {
    auxContent = auxContentContact;
  } else if (path === 'terms') {
    auxContent = auxContentTerms;
  }

  auxContainer.innerHTML = auxContent;
};