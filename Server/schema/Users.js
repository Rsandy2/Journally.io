const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = {
  userSchema,
};
