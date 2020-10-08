import movies from './movies.js';
import categories from './categories.js';
import heroes from './heroes.js';

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

const heroItems = heroes.map((hero) => {
  return `
    <li class="hero__product">
      <div class="hero__image">
        <picture>
          <source srcset="img/items/hero/${hero.img}.jpg" media="(min-width: 1200px)">
          <source srcset="img/items/hero/tablet/${hero.img}.jpg" media="(min-width: 768px)">
          <source srcset="img/items/hero/mobile/${hero.img}.jpg">
          <img src="img/items/hero/${hero.img}.jpg" alt="">
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

const heroContainer = document.querySelector('.hero__products');

heroContainer.innerHTML = heroItems;