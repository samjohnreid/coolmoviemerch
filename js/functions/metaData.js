const metaData = () => {
  const appContainer = document.getElementById('app');
  const path = appContainer.dataset.path;

  const metaTitle = document.querySelector('title');
  const metaDescription = document.querySelector('meta[name="description"]');
  let metaTitleContent = '', metaDescriptionContent = '';

  switch (path) {
    case 'home':
      metaTitleContent = 'Cool Movie Merch | Mining the Web for Movie Gold!';
      metaDescriptionContent = 'Movie merchandise, accessories, figurines, posters, prints, face masks, collectibles, apparel, home office, cosplay, toys and gadgets!';
      break;
    case 'under10':
      metaTitleContent = 'Under $10 | Cool Movie Merch';
      metaDescriptionContent = 'Find cool movie merchandise under $10!';
      break;
    case 'under20':
      metaTitleContent = 'Under $20 | Cool Movie Merch';
      metaDescriptionContent = 'Find cool movie merchandise under $20!';
      break;
    case 'category':
      if (!window.location.search) {
        metaTitleContent = 'Categories | Cool Movie Merch';
        metaDescriptionContent = 'Find cool movie merchandise by category, including Home & Kitchen, Games, Accessories, LEGO, Christmas, Toys & Gadgets, Home Office, Face Masks and many more!';
        break;
      }
    case 'movie':
      if (!window.location.search) {
        metaTitleContent = 'Movies | Cool Movie Merch';
        metaDescriptionContent = 'Find cool movie merchandise by movie, including Harry Potter, Star Wars, Jurassic Park, Deadpool, James Bond 007, Back to the Future, Indiana Jones, John Wick, Star Trek, Ghostbusters and Gremlins and many more!';
        break;
      }
    case 'license':
      if (!window.location.search) {
        metaTitleContent = 'Licenses | Cool Movie Merch';
        metaDescriptionContent = 'Find cool movie merchandise by license, including Disney, Marvel, The Mandalorian, The Simpsons, Batman, Pokémon, Pixar, DC Comics, TMNT and many more!!';
        break;
      }
    default:
      metaTitleContent = 'Cool Movie Merch | Mining the Web for Movie Gold!';
      metaDescriptionContent = '';
  };

  metaTitle.innerText = metaTitleContent;
  metaDescription.setAttribute('content', metaDescriptionContent);
};

export default metaData;