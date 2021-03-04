require("dotenv").config({ silent: true });

module.exports = {
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",

  // Environment-dependent settings
  development: {
    db: {
      dialect: "mongodb",
      uri: process.env.DB_URI || "",
    },
  },
};
