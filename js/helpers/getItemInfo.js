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
    },
    {
        "_id": "f1f43e19-440f-4d5b-89cd-35a95d12fd39",
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/c3026b41ac28ecc49d07a89078add80a3c5d2bff-525x380.jpg",
        "name": "Games"
    }
];
const movies = [
    {
        "_id": "0b99a391-c2e3-4a8e-b8d9-9e80962f40d2",
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
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/034608161e82e46e401e8c100811b46512cc5678-460x690.jpg",
        "name": "Beauty and the Beast",
        "year": 1991
    },
    {
        "_id": "bc56462b-3856-4b3b-9fb2-87102db701f5",
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
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/1c364ed2c2e407e78c771362abd299d245062459-460x690.jpg",
        "name": "The Fifth Element",
        "year": 1997
    }
];
const licenses = [
    {
        "_id": "0e371e3a-759d-49dc-8cb7-e34a9418c035",
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/ba0e2551c2cb464ef835f3e25cce19294b87f8f3-525x380.jpg",
        "name": "Harry Potter"
    },
    {
        "_id": "36df4775-85a2-45ee-aaa2-78f3c4fbd010",
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/3e66c5620f270e9294a6718ff5a3cd88f71bef10-525x380.jpg",
        "name": "Disney"
    },
    {
        "_id": "9cfaeba1-fdba-43f6-9dd5-f3117db960fa",
        "imageUrl": "https://cdn.sanity.io/images/nkto1d41/production/3ae63c9b06e84ec33273fef22dcce89047d85c86-525x380.jpg",
        "name": "Back to the Future"
    }
];

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