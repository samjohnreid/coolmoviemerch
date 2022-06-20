import { getMovieOrLicense, getCategory } from '../helpers/getItemInfo.js';

const gridContainer = document.querySelector('.item-grid__list');

const renderGridItems = (itemData) => {
  const gridItems = itemData.map((item) => {
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
          <a href="${item.url}" class="item-grid__button">BUY NOW</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = gridItems;
};

export default renderGridItems;