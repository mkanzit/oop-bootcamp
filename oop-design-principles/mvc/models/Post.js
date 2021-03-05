const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    published: { type: Boolean, default: false },
  },
  { collection: "posts" }
);

module.exports = Post = mongoose.model("Post", postSchema);
