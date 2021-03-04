const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const bparser = require("body-parser");

// Controllers
const postHandler = require("./routes/post.routes");
const aboutHandler = require("./routes/about.routes");
const contactHandler = require("./routes/contact.routes");

// Server instance
const app = express();

// Server configuration
app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
    defaultLayout: "index",
    extname: ".hbs",
  })
);
app.use(bparser.json());
app.use(bparser.urlencoded({ extended: true }));

// Endpoint registration
app.use("/", postHandler);
app.use("/about", aboutHandler);
app.use("/contact", contactHandler);

module.exports = app;
