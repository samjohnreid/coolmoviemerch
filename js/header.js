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
        <li class="active"><a href="/">Featured Products</a></li>
        <li><a href="/under-10/">Under $10</a></li>
        <li><a href="/under-20/">Under $20</a></li>
        <li><a href="/category/">Categories</a></li>
        <li><a href="/movie/">Movies</a></li>
        <li><a href="/license/">Licenses</a></li>
      </ul>
    </nav>

  </header>
`;