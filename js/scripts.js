import movies from '../data/movies.js';
import categories from '../data/categories.js';
import heroes from '../data/heroes.js';
import grid from '../data/grid.js';

// ------------------------------------------------------------

// Mobile nav menu
// TODO: use event delegation for event listeners ???
const hamburger = document.querySelector('.masthead__hamburger');
const navMenu = document.querySelector('.masthead__nav');
const toggleMenu = () => {
  navMenu.classList.toggle('masthead__nav--active');
}
hamburger.addEventListener('click', toggleMenu);

// ------------------------------------------------------------

const getMovie = (id) => {
  const getEl = movies.find(el => el.id === id);
  return getEl.title;
}

const getCategory = (id) => {
  const getEl = categories.find(el => el.id === id);
  return getEl.title;
}

// ------------------------------------------------------------

const heroItems = heroes.map((hero) => {
  return `
    <li class="hero__product">
      <div class="hero__image">
        <picture>
          <source srcset="/img/items/hero/${hero.img}.jpg" media="(min-width: 1200px)">
          <source srcset="/img/items/hero/tablet/${hero.img}.jpg" media="(min-width: 768px)">
          <source srcset="/img/items/hero/mobile/${hero.img}.jpg">
          <img src="/img/items/hero/${hero.img}.jpg" alt="">
        </picture>
      </div>
      <div class="hero__details">
        <h2 class="hero__title"><a href="${hero.url}">${hero.title}</a></h2>
        <div class="hero__price"><span>$</span>${hero.price}</div>
        <ul class="hero__tags">
          <li><a href="">${getMovie(hero.movie)}</a></li>
          <li><a href="">${getCategory(hero.category)}</a></li>
        </ul>
        <div class="hero__more-details"><a href="">Product Details</a></div>
        <a href="${hero.url}" class="hero__button">BUY NOW</a>
      </div>
    </li>
  `;
}).join('');

const heroNavItems = heroes.map((hero) => {
  return `
    <li>
      <button>
        <picture>
          <source srcset="/img/items/hero/thumbnails/${hero.img}.jpg">
          <img src="/img/items/hero/thumbnails/${hero.img}.jpg" alt="">
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
}

// ------------------------------------------------------------

const gridItems = grid.map((item) => {
  return `
    <li class="item-grid__item">
      <div class="item-grid__image">
        <picture>
          <source srcset="/img/items/item-01.jpg">
          <img src="/img/items/item-01.jpg" alt="">
        </picture>
      </div>
      <div class="item-grid__details">
        <h2 class="item-grid__title"><a href="">Sabers Chop Lightsaber Led Light Up Star Wars Chopsticks</a></h2>
        <div class="item-grid__price"><span>$</span>43.99</div>
        <ul class="item-grid__tags">
          <li><a href="">STAR WARS</a></li>
          <li><a href="">KITCHEN</a></li>
          <li><a href="">NEW</a></li>
        </ul>
        <div class="item-grid__more-details"><a href="">Product Details</a></div>
        <a href="" class="item-grid__button">BUY NOW</a>
      </div>
    </li>
  `;
}).join('');

const gridContainer = document.querySelector('.item-grid__list');
gridContainer.innerHTML = gridItems;