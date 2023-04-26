const express = require("express");
var indexRouter = require("../routes/fetch-entries");

module.exports = function (app) {
  console.log("ner");
  app.use(express.json());
  app.use("/fetch-entries", indexRouter);
};
