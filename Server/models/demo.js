const mongoose = require("mongoose");
const { entrySchema } = require("../schema/Entries");

const EntryModel = mongoose.model("entries", entrySchema);

async function testModel() {
  const demoEntry = new EntryModel({
    title: "Test Entry from Mongoose",
  });

  await demoEntry.save();
}

module.exports = {
  testModel,
};
