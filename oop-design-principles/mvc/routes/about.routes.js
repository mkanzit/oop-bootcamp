const express = require("express");
const router = express.Router();
const AboutController = require("../controllers/about.controller");

router.get("/", AboutController.renderView);

module.exports = router;
