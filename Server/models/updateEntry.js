const mongoose = require("mongoose");
const { entrySchema } = require("../schema/Entries");

const Entry = mongoose.model("entries", entrySchema);

const update_entries = async (data) => {
  const { _id, title, body } = data;
  const updateEntry = Entry.findOneAndUpdate(
    { _id },
    {
      title: title,
      body: body,
    },
    {
      new: true,
    }
  );

  return updateEntry;
};

module.exports = {
  update_entries,
};
