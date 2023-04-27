const mongoose = require("mongoose");
const { entrySchema } = require("../schema/Entries");

const Entry = mongoose.model("entries", entrySchema);

const fetch_entries = async () => {
  const fetchData = Entry.find({});
  return fetchData;
};

module.exports = {
  fetch_entries,
};
