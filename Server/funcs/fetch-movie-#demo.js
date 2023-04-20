const { client } = require("../libs/mongo-client");

async function fetch_movie(query) {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const movie = await movies.findOne(query);

    return movie;
  } finally {
    // Ensures that the client will close when you finish/errors
  }
}

module.exports = { fetch_movie };
