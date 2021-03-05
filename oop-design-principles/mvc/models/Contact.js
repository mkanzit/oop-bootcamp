const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },
  },
  { collection: "contacts" }
);

module.exports = Contact = mongoose.model("Contact", contactSchema);
