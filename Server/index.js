const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 5173;

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  //   res.send("Hello World");

  res.json({ value: 1 });
  // return res.json({ user: "Austin" });
});

const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run(query) {
  console.log(query);
  const uri =
    "mongodb+srv://Cluster56618:aG54flhgZkNH@cluster56618.o96lbgk.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const querys = { title: "Back to the Future" };
    console.log(querys);
    // console.log(query, querys);
    const movie = await movies.findOne(query);
    console.log(movie);
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.post("/", async (req, res) => {
  console.log("Request body", req.body);
  console.log("Got POST");
  const returnedValue = await run(req.body).catch(console.dir);
  res.json({ value: returnedValue });
});

app.listen(port, () => {
  console.log(`Application Listening on port ${port}`);
});
