import categories from '../data/categories.js';
import movies from '../data/movies.js';
import licenses from '../data/licenses.js';

const getMovieOrLicense = (movieId, licenseId) => {
  const listingType = movieId ? movies : licenses;
  const listingId = movieId ? movieId : licenseId;
  const listingPath = movieId ? 'movie' : 'license';
  const getEl = listingType.find(el => el.id === listingId);
  return `<a href="/${listingPath}/?id=${getEl.id}">${getEl.title}</a>`;
}

const getCategory = (id) => {
  const getEl = categories.find(el => el.id === id);
  return getEl.title;
};

export { getMovieOrLicense, getCategory };