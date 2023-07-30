// Data
import { categories, items, licenses, movies } from './functions/fetchData.js';

// Functions
import metaData from './functions/metaData.js';
import mobileNavMenu from './functions/mobileNavMenu.js';
import movieQuotes from './functions/movieQuotes.js';
import subhead from './functions/subhead.js';
import auxPages from './functions/auxPages.js';

// Helpers
import renderGridItems from './helpers/renderGridItems.js';
import renderGridCategories from './helpers/renderGridCategories.js';
import { getMovieOrLicense, getCategory } from './helpers/getItemInfo.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;


// ------------------------------------------------------------


const renderApp = (categories, items, licenses, movies) => {


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

  const heroes = items.filter(el => el.hero === true);
  
  const hero = () => {
    const activateFirstSlide = slideNum => slideNum === 0 ? 'hero__product--active' : '';
  
    const heroItems = heroes.map((hero, index) => {
      return `
        <li class="hero__product ${activateFirstSlide(index)}" data-hero-item="${index+1}">
          <div class="hero__image">
            <picture>
              <source srcset="${hero.heroImageDesktopUrl}" media="(min-width: 1200px)">
              <source srcset="${hero.heroImageTabletUrl}" media="(min-width: 768px)">
              <source srcset="${hero.heroImageMobileUrl}">
              <img src="${hero.heroImageMobileUrl}" alt="">
            </picture>
          </div>
          <div class="hero__details">
            <h2 class="hero__title"><a href="${hero.url}">${hero.name}</a></h2>
            <div class="hero__price"><span>$</span>${hero.price.toFixed(2)}</div>
            <ul class="hero__tags">
              <li>${getMovieOrLicense(hero.movie, hero.license)}</li>
              <li><a href="/category/?id=${hero.category}">${getCategory(hero.category)}</a></li>
            </ul>
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
              <source srcset="${hero.heroImageThumbUrl}">
              <img src="${hero.heroImageThumbUrl}" alt="">
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
  };
  
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
      return item.name.toLowerCase().includes(searchQuery);
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


window.addEventListener('dataFetched', () => renderApp(categories, items, licenses, movies));