const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://Cluster56618:aG54flhgZkNH@cluster56618.o96lbgk.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "journal_entries" }
  );
}
const app = express();
const port = 5173;

app.use(
  cors({
    origin: "*",
  }),
  bodyParser.json()
);

var data = require("./boot/routes.js");
const { create_entries } = require("./models/newEntry.js");
const { fetch_entries } = require("./models/fetchEntry");
const { update_entries } = require("./models/updateEntry");
const { delete_entries } = require("./models/deleteEntry");
app.use("./boot/routes", data);

app.post("/create-entries", async (req, res) => {
  console.log(req.body);
  const entry = await create_entries(req.body).catch(console.dir);
  console.log("Entry Created");
  res.json({ data: entry });
});

app.post("/update-entries", async (req, res) => {
  console.log(req.body);
  const entry = await update_entries(req.body).catch(console.dir);
  console.log("Entry Updated");
  res.json({ data: entry });
});

app.post("/delete-entries", async (req, res) => {
  console.log(req.body);
  await delete_entries(req.body).catch(console.dir);
  console.log("Entry Deleted");
  res.json({ data: "Deleted" });
});

app.get("/fetch-entries", async (req, res) => {
  const entries = await fetch_entries();
  res.json({ data: entries });
});

app.listen(port, () => {
  console.log(`Application Listening on port ${port}`);
});
