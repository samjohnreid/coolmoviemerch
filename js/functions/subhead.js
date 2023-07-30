import { categories, licenses, movies } from './fetchData.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;

const subhead = () => {
  if (path !== 'home') {
  
    const subheadContainer = document.querySelector('.subhead');
    
    const pageId = new URLSearchParams(window.location.search).get('id');
    
    const titleMap = new Map([
      ['category', categories],
      ['movie', movies],
      ['license', licenses],
    ]);
    
    const getTitle = (id) => {
      if (!pageId) {
        if (path === 'search-results') {
          // TODO: make this secure...?? 😬
          const searchQuery = new URLSearchParams(window.location.search).get('search');
          const searchResultsCount = localStorage.getItem('searchResultsCount');
          localStorage.removeItem('searchResultsCount');
          const searchResultsTitle = `<span>Search for </span>&ldquo;${searchQuery}&rdquo; <small>(${searchResultsCount} results)</small>`;
          return searchResultsTitle;
        }
        switch (path) {
          case 'category': return 'Categories';
          case 'movie': return 'Movies';
          case 'license': return 'Licenses';
          case 'under10': return 'Under $10';
          case 'under20': return 'Under $20';
          case 'search-results': return searchTitle();
          case 'about': return 'About Cool Movie Merch';
          case 'contact': return 'Contact Cool Movie Merch';
          case 'privacy': return 'Privacy Policy';
          case 'terms': return 'Terms of Use';
          case 'newsletter': return 'Thank you for signing up!';
        }
      }
      const getEl = titleMap.get(path).find(el => el._id === id);
      return getEl.name;
    }
  
    const subheadTitle = `<h1 class="subhead__title">${getTitle(pageId)}</h1>`;
  
    subheadContainer.innerHTML = subheadTitle;
  };
};

export default subhead;