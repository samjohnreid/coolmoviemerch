const itemsGet = localStorage.getItem('itemsSet');
const items = JSON.parse(itemsGet);

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
    const itemCount = items.filter(gridItem => gridItem[catType] === item._id);
    
    return `
      <li class="item-grid__item">
        <div class="item-grid__image">
          <a href="/${path}/?id=${item._id}">
            <picture>
              <source srcset="${item.imageUrl}">
              <img src="${item.imageUrl}" alt="Thumbnail image for ${item.name}" loading="lazy">
            </picture>
          </a>
        </div>
        <div class="item-grid__details">
          <div class="item-grid__title">${itemCount.length} Item${itemCount.length > 1 ? 's' : ''}</div>
          <h2 class="item-grid__price"><a href="/${path}/?id=${item._id}">${item.name}</a></h2>
          <a href="/${path}/?id=${item._id}" class="item-grid__button">VIEW ITEMS</a>
        </div>
      </li>
    `;
  }).join('');

  gridContainer.innerHTML = categoryNavResultItems;
};

export default renderGridCategories;