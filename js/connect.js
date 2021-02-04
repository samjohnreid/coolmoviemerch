mongodb+srv://sam-john-read-270678:<password>@cluster0.2u7b1.mongodb.net/<dbname>?retryWrites=true&w=majority



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sam-john-read-270678:<password>@cluster0.2u7b1.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
