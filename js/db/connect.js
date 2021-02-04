const { MongoClient } = require("mongodb");

const url = "mongodb+srv://sam-john-read-270678:Sammers_220182@cluster0.2u7b1.mongodb.net/sams_database_01?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);