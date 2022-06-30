const categoriesGet = localStorage.getItem('categoriesSet');
const categories = JSON.parse(categoriesGet);

const licensesGet = localStorage.getItem('licensesSet');
const licenses = JSON.parse(licensesGet);

const moviesGet = localStorage.getItem('moviesSet');
const movies = JSON.parse(moviesGet);

const getMovieOrLicense = (movieId, licenseId) => {
  const listingType = movieId ? movies : licenses;
  const listingId = movieId ? movieId : licenseId;
  const listingPath = movieId ? 'movie' : 'license';
  const getEl = listingType.find(el => el._id === listingId);
  return `<a href="/${listingPath}/?id=${getEl._id}">${getEl.name}</a>`;
}

const getCategory = (id) => {
  const getEl = categories.find(el => el._id === id);
  return getEl.name;
};

export { getMovieOrLicense, getCategory };