const mongoose = require("mongoose");
const { entrySchema } = require("../schema/Entries");

const Entry = mongoose.model("entries", entrySchema);

const create_entries = async (data) => {
  const { title, body } = data;
  const newEntry = new Entry({ title: title, body: body, author: "Rsandy" });
  return newEntry.save().then((saved) => {
    return saved;
  });
};

module.exports = {
  create_entries,
};
