const placeholderProductGrid = document.getElementById('product-grid');

function getProducts() {
  fetch('../data/products.json')
  .then((res) => res.json())
  .then((data) => {
    const templateProductGrid = `
      <div class="items__grid">
        <ul class="items__list">
        ${
          data.map((product) => {
            console.log(product.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()); // TODO: remove for production
            return (`
              <li class="items__item">
                <a href="${product.url}" target="_blank">
                  <h2>${product.title}</h2>
                  <img src="img/${product.img}" alt="Image for ${product.title}">
                </a>
              </li>
            `)
          }).join('')
        }
        </ul>
      </div>
    `;
    placeholderProductGrid.innerHTML = templateProductGrid;
  })
}

getProducts();