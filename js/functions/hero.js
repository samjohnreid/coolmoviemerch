import heroes from '../data/heroes.js';
import { getMovieOrLicense, getCategory } from '../helpers/getItemInfo.js';

// code for adding Product Details, add directly below <ul class="hero__tags">
// <div class="hero__more-details"><a href="">Product Details</a></div>

const hero = () => {
  const activateFirstSlide = slideNum => slideNum === 0 ? 'hero__product--active' : '';

  const heroItems = heroes.map((hero, index) => {
    return `
      <li class="hero__product ${activateFirstSlide(index)}" data-hero-item="${index+1}">
        <div class="hero__image">
          <picture>
            <source type="image/avif" srcset="/img/items/hero/${hero.img}.avif" media="(min-width: 1200px)">
            <source type="image/avif" srcset="/img/items/hero/tablet/${hero.img}.avif" media="(min-width: 768px)">
            <source type="image/avif" srcset="/img/items/hero/mobile/${hero.img}.avif">
            <img src="/img/items/hero/mobile/${hero.img}.jpg" alt="">
          </picture>
        </div>
        <div class="hero__details">
          <h2 class="hero__title"><a href="${hero.url}">${hero.title}</a></h2>
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
            <source type="image/avif" srcset="/img/items/hero/thumb/${hero.img}.avif">
            <img src="/img/items/hero/thumb/${hero.img}.jpg" alt="">
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

export default hero;