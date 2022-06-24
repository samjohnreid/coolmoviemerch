import items from '../data/items.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;
const gridContainer = document.querySelector('.item-grid__list');

const renderGridCategories = (category) => {
  let catType = '';
  switch(window.location.pathname) {
    case '/movie/':
      catType = 'movie';
      break;
    case '/license/':
      catType = 'license';
      break;
    default:
      catType = 'category';
  }
  const categoryNavResultItems = category.map((item) => {
    const itemCount = items.filter(gridItem => gridItem[catType] === item.id);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/${path}/?id=${item.id}">
            <picture>
              <source srcset="/img/items/${item.img}.jpg">
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

export default renderGridCategories;