const { client } = require("../libs/mongo-client");

async function fetch_movie(params) {
  // const { title } = params;
  console.log(params.title);
  if (params.title.length === 0) params = {};
  try {
    const database = client.db("sample_mflix");
    const moviesCollection = database.collection("movies");

    const movies = await moviesCollection.findOne(params || {});
    // console.log(movies);
    return movies;
  } finally {
    // Ensures that the client will close when you finish/errors
  }
}

module.exports = { fetch_movie };
