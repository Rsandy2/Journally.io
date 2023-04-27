const mongoose = require("mongoose");
const { entrySchema } = require("../schema/Entries");

const Entry = mongoose.model("entries", entrySchema);

const delete_entries = async (data) => {
  const { _id } = data;
  const deletedEntry = Entry.deleteOne({ _id });
  return deletedEntry;
};

module.exports = {
  delete_entries,
};
