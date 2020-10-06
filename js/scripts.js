import * as products from './data.js';

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

const productsHero = products.products;

const getMovie = (id) => {
  const getEl = products.movies.find(el => el.id === id);
  return getEl.title;
}

const getCategory = (id) => {
  const getEl = products.categories.find(el => el.id === id);
  return getEl.title;
}

const prodString = `
  Product Name: ${products.products[0].title}
  Movie: ${getMovie(products.products[0].movie)}
  Category: ${getCategory(products.products[0].category)}
`;

const cool = productsHero.map((product) => {
  return `
    <li class="hero__product">
      <div class="hero__image">
        <picture>
          <source srcset="img/items/hero/apron.jpg" media="(min-width: 1200px)">
          <source srcset="img/items/hero/tablet/apron.jpg" media="(min-width: 768px)">
          <source srcset="img/items/hero/mobile/apron.jpg">
          <img src="img/items/hero/apron.jpg" alt="">
        </picture>
      </div>
      <div class="hero__details">
        <h2 class="hero__title"><a href="${product.url}">${product.title}</a></h2>
        <div class="hero__price"><span>$</span>${product.price}</div>
        <ul class="hero__tags">
          <li><a href="">JOHN WICK</a></li>
          <li><a href="">FIGURINES</a></li>
          <li><a href="">NEW</a></li>
        </ul>
        <div class="hero__more-details"><a href="">Product Details</a></div>
        <button class="hero__button">BUY NOW</button>
      </div>
    </li>
  `;
}).join('');

console.log(cool);