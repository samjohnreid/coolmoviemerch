const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;

const mastheadLinks = [
  {
    pagePath: 'home',
    href: '/',
    text: 'Featured Products'
  },
  {
    pagePath: 'under10',
    href: '/under-10/',
    text: 'Under $10'
  },
  {
    pagePath: 'under20',
    href: '/under-20/',
    text: 'Under $20'
  },
  {
    pagePath: 'category',
    href: '/category/',
    text: 'Categories'
  },
  {
    pagePath: 'movie',
    href: '/movie/',
    text: 'Movies'
  },
  {
    pagePath: 'license',
    href: '/license/',
    text: 'Licenses'
  }
];

const renderMastheadLinks = mastheadLinks.map((link) => {
  const activeLink = path === link.pagePath ? 'class="active"' : '';
  return `
    <li ${activeLink}><a href="${link.href}">${link.text}</a></li>
  `;
}).join('');

export default `
  <header class="masthead">
    
    <div class="masthead__upper-wrapper">
      <div class="masthead__upper">
        <a href="/" class="masthead__logo">Cool Movie Merch</a>
        <form action="/search-results" method="GET" class="masthead__search" role="search" data-movie-quote-placeholder="Search Cool Movie Merch...">
          <input type="text" name="search" placeholder="Search Cool Movie Merch..." required>
          <button>Search</button>
        </form>
        <button class="masthead__hamburger">Navigation Menu</button>
      </div>
    </div>

    <nav class="masthead__nav">
      <ul class="masthead__nav-list">
        ${renderMastheadLinks}
      </ul>
    </nav>

  </header>
`;