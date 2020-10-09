import header from './header.js';
import hero from './hero.js';
import grid from './grid.js';
import footer from './footer.js';

const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;

// ------------------------------------------------------------

const app = `
  ${header}

  <main>
    
    ${path === 'home' ? hero : ''}
    
    ${grid}

  </main>

  ${footer}
`;

appContainer.innerHTML = app;