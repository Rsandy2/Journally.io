const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://Cluster56618:aG54flhgZkNH@cluster56618.o96lbgk.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = { client };
