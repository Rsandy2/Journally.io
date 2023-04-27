const mongoose = require("mongoose");
const { Schema } = mongoose;

const entrySchema = new Schema({
  title: String,
  //   author: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  author: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = {
  entrySchema,
};
