const categories = [
  {
      "_id": "4164a87f-e6f3-4b3f-853a-866200ccd1a8",
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/d1bf9e50cf4fa8a816a534833fb54e78d79b80db-525x380.jpg",
      "name": "Figurines"
  },
  {
      "_id": "6f5b09a3-f64f-4efc-ac86-6c2f351a9387",
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/ce8ea587273a181c4f3b82773d6b8d5bb1429ee6-525x380.jpg",
      "name": "Home & Kitchen"
  },
  {
      "_id": "a53c6229-341d-4c30-912c-8a1415a785c3",
      "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/c0b911af5e1d2bff03cd2dcdc9343fee2188ea28-525x380.jpg",
      "name": "Cosplay"
  }
];
const movies = [
  {
      "_createdAt": "2022-06-21T20:35:24Z",
      "_id": "0b99a391-c2e3-4a8e-b8d9-9e80962f40d2",
      "_rev": "fEO11EA0NM7P8KkaWG7Wgs",
      "_type": "movie",
      "_updatedAt": "2022-06-23T02:24:17Z",
      "directors": [
          {
              "_key": "f25a3c899b2d",
              "_ref": "abb5313f-fdc3-48d7-b648-daaecbda6421",
              "_type": "reference"
          },
          {
              "_key": "c481b8a70347",
              "_ref": "bddf24b7-e4f7-4999-8d21-1a6afe81119a",
              "_type": "reference"
          }
      ],
      "genre": [
          {
              "_key": "9f8ac17bfa45",
              "_ref": "9f32bbb8-6ed7-403a-8fe5-948aa576d3e3",
              "_type": "reference"
          },
          {
              "_key": "12be02f5ee87",
              "_ref": "362dee14-2936-4c3b-a86b-9edd6a24aae0",
              "_type": "reference"
          },
          {
              "_key": "2b33d5fed57f",
              "_ref": "1fe061ea-a98f-44d9-956c-efd03b39868d",
              "_type": "reference"
          }
      ],
      "name": "Beauty and the Beast",
      "poster": {
          "_type": "image",
          "asset": {
              "_ref": "image-034608161e82e46e401e8c100811b46512cc5678-460x690-jpg",
              "_type": "reference"
          }
      },
      "year": 1991
  },
  {
      "_createdAt": "2022-06-21T21:07:35Z",
      "_id": "bc56462b-3856-4b3b-9fb2-87102db701f5",
      "_rev": "OrQ6z7w0WB8N4bm29ysPuy",
      "_type": "movie",
      "_updatedAt": "2022-06-23T02:23:56Z",
      "directors": [
          {
              "_key": "3b699704330b",
              "_ref": "742b1cdf-3530-4fa8-a76d-387074544af2",
              "_type": "reference"
          }
      ],
      "genre": [
          {
              "_key": "d847c4cc5f62",
              "_ref": "2a0d6fba-1cc3-4717-847b-c36d6a33e732",
              "_type": "reference"
          },
          {
              "_key": "f04be44eb108",
              "_ref": "a70c7f61-bdaf-489e-94f9-35def8627e7e",
              "_type": "reference"
          },
          {
              "_key": "ebb81ee6a0af",
              "_ref": "b7e873b9-352e-4654-8e6d-5b3452941808",
              "_type": "reference"
          }
      ],
      "name": "The Fifth Element",
      "poster": {
          "_type": "image",
          "asset": {
              "_ref": "image-1c364ed2c2e407e78c771362abd299d245062459-460x690-jpg",
              "_type": "reference"
          }
      },
      "year": 1997
  }
];
const licenses = [
  {
      "_createdAt": "2022-06-21T20:56:04Z",
      "_id": "0e371e3a-759d-49dc-8cb7-e34a9418c035",
      "_rev": "S6NcJ8LE6UwKyiSmUJeCKA",
      "_type": "license",
      "_updatedAt": "2022-06-21T20:56:04Z",
      "image": {
          "_type": "image",
          "asset": {
              "_ref": "image-ba0e2551c2cb464ef835f3e25cce19294b87f8f3-525x380-jpg",
              "_type": "reference"
          }
      },
      "name": "Harry Potter"
  },
  {
      "_createdAt": "2022-06-21T20:31:15Z",
      "_id": "36df4775-85a2-45ee-aaa2-78f3c4fbd010",
      "_rev": "S6NcJ8LE6UwKyiSmUJbkbi",
      "_type": "license",
      "_updatedAt": "2022-06-21T20:31:15Z",
      "image": {
          "_type": "image",
          "asset": {
              "_ref": "image-3e66c5620f270e9294a6718ff5a3cd88f71bef10-525x380-jpg",
              "_type": "reference"
          }
      },
      "name": "Disney"
  }
];

const getMovieOrLicense = (movieId, licenseId) => {
  const listingType = movieId ? movies : licenses;
  const listingId = movieId ? movieId : licenseId;
  const listingPath = movieId ? 'movie' : 'license';console.log('hullo!',licenseId);
  const getEl = listingType.find(el => el._id === listingId);
  return `<a href="/${listingPath}/?id=${getEl._id}">${getEl.name}</a>`;
}

const getCategory = (id) => {
  const getEl = categories.find(el => el._id === id);
  return getEl.name;
};

export { getMovieOrLicense, getCategory };