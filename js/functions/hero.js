const items = [
  {
      "category": "a53c6229-341d-4c30-912c-8a1415a785c3",
      "featured": true,
      "hero": null,
      "heroImageDesktopUrl": null,
      "heroImageMobileUrl": null,
      "heroImageTabletUrl": null,
      "heroImageThumbUrl": null,
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/c0b911af5e1d2bff03cd2dcdc9343fee2188ea28-525x380.jpg",
      "license": null,
      "movie": "bc56462b-3856-4b3b-9fb2-87102db701f5",
      "name": "The Fifth Element Womens Futuristic Element Strappy Stretchy Costume Bodysuit with Cutouts",
      "price": 59,
      "url": "https://www.amazon.com/Forplay-Futuristic-Element-Strappy-Bodysuit/dp/B00C9TZTJC/ref=as_li_ss_tl?dchild=1&keywords=fifth+element+costume&qid=1602536840&sr=8-2&linkCode=sl1&tag=coolmoviemerc-20&linkId=01b8057a47653fd7261a41eaad02a1b1&language=en_US"
  },
  {
      "category": "f1f43e19-440f-4d5b-89cd-35a95d12fd39",
      "featured": true,
      "hero": true,
      "heroImageDesktopUrl": "https://cdn.sanity.io/images/nkto1d41/production/5ceb279849b89e47ce27016cc5b97c2b0314a42c-1200x670.jpg",
      "heroImageMobileUrl": "https://cdn.sanity.io/images/nkto1d41/production/bfd2ccb5a085db17cd8350d4c8b90ae31d83dff9-600x335.jpg",
      "heroImageTabletUrl": "https://cdn.sanity.io/images/nkto1d41/production/03f58e80ef68968e4ffe2c2862ea05f6cceb6e05-717x518.jpg",
      "heroImageThumbUrl": "https://cdn.sanity.io/images/nkto1d41/production/9852872ef7609c731c3b04975dee6ffda6d4d179-200x200.jpg",
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/c3026b41ac28ecc49d07a89078add80a3c5d2bff-525x380.jpg",
      "license": "9cfaeba1-fdba-43f6-9dd5-f3117db960fa",
      "movie": null,
      "name": "Funko Back to The Future Back in Time Board Game",
      "price": 28.77,
      "url": "https://www.amazon.com/Back-Future-Time-Board-Game/dp/B085WL4LMG/ref=as_li_ss_tl?crid=2IRA3F7PJ9QVR&dchild=1&keywords=back+to+the+future+merchandise&qid=1602527077&sprefix=back+to+the+future+merc,aps,152&sr=8-4&linkCode=sl1&tag=coolmoviemerc-20&linkId=2180089e4e8f287e23bbc5a87014f691&language=en_US"
  },
  {
      "category": "6f5b09a3-f64f-4efc-ac86-6c2f351a9387",
      "featured": true,
      "hero": null,
      "heroImageDesktopUrl": null,
      "heroImageMobileUrl": null,
      "heroImageTabletUrl": null,
      "heroImageThumbUrl": null,
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/e45cdfd0ef8278b12cabe6e1b2486f58b3962ad9-525x380.jpg",
      "license": "0e371e3a-759d-49dc-8cb7-e34a9418c035",
      "movie": null,
      "name": "Harry Potter Cauldron Light with Color Changing Bubbling Effect",
      "price": 5.99,
      "url": "https://www.amazon.com/Paladone-Harry-Potter-Cauldron-Light/dp/B0854HN7X8/ref=as_li_ss_tl?dchild=1&keywords=harry+potter+merchandise&qid=1602277799&sr=8-16-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNFFXQlczTk5FV0pWJmVuY3J5cHRlZElkPUEwODMzOTQ4VEROWUJLUTNVNkxSJmVuY3J5cHRlZEFkSWQ9QTA5MjE0OTkyUFQyWTRQTDRLM1ZaJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&&linkCode=sl1&tag=coolmoviemerc-20&linkId=8fd4dc295f66517e1738aebb01c7db74&language=en_US"
  },
  {
      "category": "4164a87f-e6f3-4b3f-853a-866200ccd1a8",
      "featured": null,
      "hero": null,
      "heroImageDesktopUrl": null,
      "heroImageMobileUrl": null,
      "heroImageTabletUrl": null,
      "heroImageThumbUrl": null,
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/3e66c5620f270e9294a6718ff5a3cd88f71bef10-525x380.jpg",
      "license": "36df4775-85a2-45ee-aaa2-78f3c4fbd010",
      "movie": "0b99a391-c2e3-4a8e-b8d9-9e80962f40d2",
      "name": "Beast Kingdom Beauty & The Beast D-Stage Series Statue",
      "price": 88.98,
      "url": "https://www.amazon.com/Beast-Kingdom-Beauty-Ds-011-D-Stage/dp/B07GCF6HVM/ref=as_li_ss_tl?dchild=1&keywords=beauty+and+the+beast+movie+merchandise&qid=1602363864&sr=8-13&linkCode=sl1&tag=coolmoviemerc-20&linkId=f8c2df6043fc5d0450b73e006b0f64a0&language=en_US"
  }
];
const heroes = items.filter(el => el.hero === true);
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

export default hero;