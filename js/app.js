import header from './header.js';
import hero from './hero.js';
import grid from './grid.js';
import auxPage from './auxPage.js';
import subhead from './subhead.js';
import footer from './footer.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;
const aux = appContainer.dataset.aux;

// ------------------------------------------------------------

const app = `
  ${header}

  <main>
    
    ${path === 'home' ? hero : ''}

    ${path !== 'home' ? subhead : ''}

    ${aux === 'true' ? auxPage : grid}

  </main>

  ${footer}
`;

appContainer.innerHTML = app;