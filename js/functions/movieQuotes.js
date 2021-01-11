import quotes from '../data/quotes.js';

const movieQuotes = () => {
  const searchBar = document.querySelector('.masthead__search');
  const searchField = searchBar.querySelector('input');

  // Set movie quote randomly from array of movie quotes
  const movieQuotes = quotes;
  searchBar.dataset.movieQuotePlaceholder = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];

  // Grab the current quote so we can hide it when search is being used, and restore when empty again
  const currentQuote = searchBar.dataset.movieQuotePlaceholder;
  searchField.addEventListener('blur', (e) => {
    searchBar.dataset.movieQuotePlaceholder = e.target.value.length > 0 ? '' : currentQuote;
  });
};

export default movieQuotes;