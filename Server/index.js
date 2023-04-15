const express = require("express");
const cors = require("cors");
const app = express();
const port = 5173;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  //   res.send("Hello World");
  console.log("Request body", req.body);
  res.json({ value: 1 });
  //   return res.json({ user: "Austin" });
});

app.post("/", (req, res) => {
  //   res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Application Listening on port ${port}`);
});
