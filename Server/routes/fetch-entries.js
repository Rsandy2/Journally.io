var express = require("express");
var router = express.Router();
const fetch_entries = require("../models/newEntry");

router.get("/fetch-entries", async (req, res) => {
  const entry = await fetch_entries().catch(console.dir);
  res.json({ data: entry });
});

router.post("/fetch-entries", async (req, res) => {
  console.log(req.body);
  const entry = await fetch_entries(req.body).catch(console.dir);
  console.log("er");
  res.json({ data: entry });
});

module.exports = router;
