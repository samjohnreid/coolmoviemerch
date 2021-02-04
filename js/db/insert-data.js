const { MongoClient } = require("mongodb");
 
const url = "mongodb+srv://sam-john-read-270678:Sammers_220182@cluster0.2u7b1.mongodb.net/sams_database_01?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "sams_database_01";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("movies");
         // Construct a document                                                                                                                                                              
         let movies = [
          {
            id: 10,
            title: `Thor`,
            year: 2011,
            director: `Kenneth Branagh`,
            img: 'marvel-thor-superhero-figurine-christmas-tree-ornament'
          },
          {
            id: 11,
            title: `Captain America`,
            year: 2011,
            director: `Joe Johnston`,
            img: 'marvel-legends-series-captain-america-shield'
          },
          {
            id: 12,
            title: `Spider-Man`,
            year: 2017,
            director: `Jon Watts`,
            img: 'marvel-tony-stark-sunglasses-vintage-square-metal-frame-eyeglasses-spider-man'
          },
          {
            id: 13,
            title: `Avengers`,
            year: 2018,
            director: `Joe Russo, Anthony Russo`,
            img: 'marvel-legends-series-infinity-gauntlet-articulated-electronic-fist'
          },
          {
            id: 14,
            title: `Iron Man`,
            year: 2008,
            director: `Jon Favreau`,
            img: 'geek-and-glitter-marvel-iron-man-cufflink-set-with-gift-box'
          },
          {
            id: 15,
            title: `Deadpool`,
            year: 2016,
            director: `Tim Miller`,
            img: 'monopoly-game-marvel-deadpool-edition'
          },
          {
            id: 16,
            title: `James Bond`,
            year: 1962,
            director: `Terence Young`,
            img: 'paladone-casino-royale-poker-chip-coasters-officially-licensed-james-bond-007-merchandise'
          },
          {
            id: 18,
            title: `Back to the Future`,
            year: 1985,
            director: `Robert Zemeckis`,
            img: 'back-to-the-future-officially-licensed-odd-sox-unisex'
          },
          {
            id: 19,
            title: `Indiana Jones`,
            year: 1981,
            director: `Steven Spielberg`,
            img: 'raiders-of-the-lost-ark-chachapoya-fertility-idol-replica-cosplay-collection-edition-indiana-jones'
          },
          {
            id: 20,
            title: `The Fifth Element`,
            year: 1997,
            director: `Luc Besson`,
            img: 'fifth-element-cosplay-futuristic-strappy-stretchy-costume-bodysuit-with-cutouts'
          },
          {
            id: 21,
            title: `The Simpsons`,
            year: 2007,
            director: `David Silverman`,
            img: 'cards-against-simpsons-game-contains-600-cards'
          },
          {
            id: 22,
            title: `Star Trek`,
            year: 1979,
            director: `Robert Wise`,
            img: 'star-trek-uss-enterprise-bottle-opener-ncc-1701'
          },
          {
            id: 23,
            title: `Batman`,
            year: 1989,
            director: `Tim Burton`,
            img: 'batman-classic-bat-shield-logo-face-mask'
          },
          {
            id: 24,
            title: `Pokémon`,
            year: 1998,
            director: `Kunihiko Yuyama`,
            img: 'pokemon-sculpted-ceramic-mug-set-2-pack'
          },
          {
            id: 25,
            title: `Ghostbusters`,
            year: 1984,
            director: `Ivan Reitman`,
            img: 'spirit-halloween-ghostbusters-deluxe-replica-proton-pack-officially-licensed'
          },
          {
            id: 26,
            title: `Coco`,
            year: 2017,
            director: `Adrian Molina, Lee Unkrich`,
            img: 'jay-franco-pixar-coco-seize-the-moment-sherpa-throw-blanket'
          },
          {
            id: 27,
            title: `Toy Story`,
            year: 1995,
            director: `John Lasseter`,
            img: 'pixar-toy-story-top-trumps-game-of-match'
          },
          {
            id: 28,
            title: `The Incredibles`,
            year: 2004,
            director: `Brad Bird`,
            img: 'miracle-mugs-incredible-fitness-graphic-t-shirt-for-women'
          },
          {
            id: 29,
            title: `Gremlins`,
            year: 1984,
            director: `Joe Dante`,
            img: 'paladone-gremlins-gizmo-coffee-mug-officially-licensed'
          },
          {
            id: 30,
            title: `The Nightmare Before Christmas`,
            year: 1993,
            director: `Henry Selick`,
            img: 'hyper-pet-disneys-nightmare-before-christmas-jack-plush-dog-toy'
          }
         ]
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(movies);
         // Find one document
         const myDoc = await col.find({});
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);