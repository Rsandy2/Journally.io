const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { client } = require("./libs/mongo-client");
const { fetch_movie } = require("./funcs/fetch-movie-#demo");
const app = express();

const port = 5173;

app.use(
  cors({
    origin: "*",
  }),
  bodyParser.json()
);

app.get("/", (req, res) => {
  res.json({ data: 1 });
});

app.post("/", async (req, res) => {
  console.log("Request body", req.body);
  console.log("Got POST");
  const movie = await fetch_movie(req.body).catch(console.dir);
  res.json({ data: movie });
});

app.listen(port, () => {
  console.log(`Application Listening on port ${port}`);
});
