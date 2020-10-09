export default `
  <header class="masthead">
    
    <div class="masthead__upper-wrapper">
      <div class="masthead__upper">
        <a href="" class="masthead__logo">Cool Movie Merch</a>
        <form action="/search-results" method="GET" class="masthead__search" role="search">
          <input type="text" name="search" placeholder="Search Cool Movie Merch..." required>
          <button>Search</button>
        </form>
        <button class="masthead__hamburger">Navigation Menu</button>
      </div>
    </div>

    <nav class="masthead__nav">
      <ul class="masthead__nav-list">
        <li><a href="">Newly Added</a></li>
        <li class="active"><a href="">Product Type</a></li>
        <li><a href="">License</a></li>
        <li><a href="">Company</a></li>
        <li><a href="">Movie</a></li>
        <li><a href="">Under $10</a></li>
        <li><a href="">Under $20</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>

  </header>
`;