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
          <source srcset="/img/items/hero/${hero.img}.avif" media="(min-width: 1200px)">
          <source srcset="/img/items/hero/tablet/${hero.img}.avif" media="(min-width: 768px)">
          <source srcset="/img/items/hero/mobile/${hero.img}.avif">
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
          <source srcset="/img/items/hero/thumb/${hero.img}.avif">
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
        case 'newsletter': return 'Thank you for signing up!';
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

  // TODO: add fight club leather jacket(s) to grid!
  const auxContentAbout = `
    <p>Cool Movie Merch exists as a resource to find cool memorabilia, gadgets, toys, games, posters, accessories, apparel, office equipment, cosplay gear, face masks and any kind of merchandise related to movies... mining the web for movie gold!</p>
    <p>Most of the items you see on here will generate commission as affiliate links (the price won't be increased at all for you, it just means Cool Movie Merch gets a small cut from the seller for sending the referral).</p>
    <p>However! This site exists primarily as a resource for ride or die movie buffs, and Cool Movie Merch is of the same ilk as you; so you will still see links to cool merch even if they don't generate any affiliate revenue&mdash;for example, these awesome <a href="https://www.soulrevolver.com/mens-leather-jackets/mens-replica-leather-jackets/fight-club">Fight Club leather jackets</a>!</p>
    <p>That's about it, really. If you need to know more red tape stuff, then please visit the <a href="/privacy/">privacy</a>, <a href="/terms/">terms</a> or <a href="/contact/">contact</a> page; otherwise, <a href="/">get browsing</a>!</p>
  `;

  // TODO: update this policy when i start using localStorage for favorite items, and/or if i store search terms
  const auxContentPrivacy = `
    <p>Cool Movie Merch does not use cookies or store or track any data about you whatsoever (well, unless you sign up for the newsletter - in which case a record of your email address will be kept).</p>
    <p>If you sign up for our newsletter, a record of your email address will be stored for use purely to send out occasional emails regarding new merch listed on this site - and that email address will never be shared with anybody.</p>
  `;

  // TODO: set up a forward on this email address! (to samueljclarke@gmail.com...?)
  // TODO: captcha...?
  const auxContentContact = `
    <p>Please reach out if you have any questions regarding any of the content on this site: <a href="mailto:info@coolmoviemerch.com">info@coolmoviemerch.com</a></p>
  `;

  const auxContentTerms = `
    <p>Cool Movie Merch is a participant in multiple affiliate advertising programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for affiliates to earn fees (at no additional cost to you!) by linking to Amazon.com and affiliated sites.</p>
    <p>By using this site, you agree that it is your responsibility to ensure any prices listed on this site are accurate on the partner site. Cool Movie Merch is not responsible for any discrepancies in price listed on this site against those at point-of-sale. (Basically, please be sure to keep your eye on the price when you're checking out!)</p>
  `;

  const auxContentNewsletter = () => {
    const newsletterEmail = new URLSearchParams(window.location.search).get('email');
    return `
      <p>You joined the Cool Movie Merch newsletter with the following email: <strong>${newsletterEmail}</strong></p>
    `;
  };

  // TODO: turn this into switch (like in getTitle?)
  if (path === 'about') {
    auxContent = auxContentAbout;
  } else if (path === 'privacy') {
    auxContent = auxContentPrivacy;
  } else if (path === 'contact') {
    auxContent = auxContentContact;
  } else if (path === 'terms') {
    auxContent = auxContentTerms;
  } else if (path === 'newsletter') {
    auxContent = auxContentNewsletter();
  }

  auxContainer.innerHTML = auxContent;
};


// ------------------------------------------------------------


// Prevent CLS on images













