const { client } = require("../libs/mongo-client");

async function fetch_movie(query) {
  console.log("er");
  try {
    const database = client.db("sample_mflix");
    const moviesCollection = database.collection("movies");

    const movies = await moviesCollection.findOne({});
    console.log(movies);
    return movies;
  } finally {
    // Ensures that the client will close when you finish/errors
  }
}

module.exports = { fetch_movie };
