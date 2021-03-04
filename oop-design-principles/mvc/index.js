const mongoose = require("mongoose");

// Load configuration
const settings = require("./settings");

// Load the app
const app = require("./app");

// Connect to Database
mongoose
  .connect(settings[settings.env].db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => console.log(`DB Connected successfully`))
  .catch((err) => console.log(`Error in DB connection ${err}`));

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

app.listen(settings.port, () => {
  console.log(`Server started at http://localhost:${settings.port}`);
});
