const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
    lastSeenLocation: String,
    description: String,
    image: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MissingPerson", schema);
