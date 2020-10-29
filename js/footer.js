/*
/* social links, to go directly below <small> tag in .footer__social
/* 
<ul class="footer__social-links">
  <li class="instagram"><a href="">Instagram</a></li>
  <li class="facebook"><a href="">Facebook</a></li>
  <li class="twitter"><a href="">Twitter</a></li>
  <li class="pinterest"><a href="">Pinterest</a></li>
</ul>
*/

const date = new Date();

export default `
  <footer class="footer">
    
    <div class="footer__license-grid-wrapper">
      <div class="footer__license-grid">
        <ul class="footer__license-grid-list">
          <li><a href="/license/?id=1"><img src="/img/license-logos/harry-potter.png" alt="Harry Potter"></a></li>
          <li><a href="/license/?id=2"><img src="/img/license-logos/disney.png" alt="Disney"></a></li>
          <li><a href="/license/?id=3"><img src="/img/license-logos/star-wars.png" alt="Star Wars"></a></li>
          <li><a href="/license/?id=4"><img src="/img/license-logos/jurassic-park.png" alt="Jurassic Park"></a></li>
          <li><a href="/license/?id=5"><img src="/img/license-logos/marvel.png" alt="Marvel"></a></li>
          <li><a href="/license/?id=6"><img src="/img/license-logos/deadpool.png" alt="Deadpool"></a></li>
          <li><a href="/license/?id=7"><img src="/img/license-logos/james-bond-007.png" alt="James Bond 007"></a></li>
        </ul>
        <ul class="footer__license-grid-list">
          <li><a href="/license/?id=8"><img src="/img/license-logos/the-mandalorian.png" alt="The Mandalorian"></a></li>
          <li><a href="/license/?id=9"><img src="/img/license-logos/back-to-the-future.png" alt="Back to the Future"></a></li>
          <li><a href="/license/?id=10"><img src="/img/license-logos/indiana-jones.png" alt="Indiana Jones"></a></li>
          <li><a href="/license/?id=20"><img src="/img/license-logos/john-wick.png" alt="John Wick"></a></li>
          <li><a href="/license/?id=12"><img src="/img/license-logos/star-trek.png" alt="Star Trek"></a></li>
        </ul>
        <ul class="footer__license-grid-list">
          <li><a href="/license/?id=13"><img src="/img/license-logos/batman.png" alt="Batman"></a></li>
          <li><a href="/license/?id=14"><img src="/img/license-logos/pokemon.png" alt="Pokémon"></a></li>
          <li><a href="/license/?id=15"><img src="/img/license-logos/ghostbusters.png" alt="Ghostbusters"></a></li>
          <li><a href="/license/?id=16"><img src="/img/license-logos/pixar.png" alt="Pixar"></a></li>
          <li><a href="/license/?id=17"><img src="/img/license-logos/dc.png" alt="DC"></a></li>
          <li><a href="/license/?id=18"><img src="/img/license-logos/gremlins.png" alt="Gremlins"></a></li>
          <li><a href="/license/?id=19"><img src="/img/license-logos/teenage-mutant-ninja-turtles.png" alt="Teenage Mutant Ninja Turtles"></a></li>
        </ul>
      </div>
    </div>

    <div class="footer__newsletter-wrapper">
      <div class="footer__newsletter">
        <div class="footer__newsletter-blurb">
          <h2>Receive very occasional emails with cool new merch.</h2>
          <h3>(Promise not to share your email with anybody else!)</h3>
        </div>
        <form class="footer__newsletter-form">
          <input type="text" placeholder="email@example.com">
          <button><span>Sign Me Up!</span></button>
        </form>
      </div>
    </div>

    <nav class="footer__links">
      <a href="/" class="footer__links-logo">Cool Movie Merch</a>
      <ul class="footer__links-list">
        <li><a href="/">Featured Products</a></li>
        <li><a href="/under-10/">Under $10</a></li>
        <li><a href="/under-20/">Under $20</a></li>
        <li><a href="/category/">Categories</a></li>
        <li><a href="/movie/">Movies</a></li>
        <li><a href="/license/">Licenses</a></li>
      </ul>
      <ul class="footer__links-list">
        <li><a href="">About</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>

    <div class="footer__social-wrapper">
      <div class="footer__social">
        <small>&copy; ${date.getFullYear()} Cool Movie Merch. All Rights Reserved.</small>
        
      </div>
    </div>

  </footer>
`;