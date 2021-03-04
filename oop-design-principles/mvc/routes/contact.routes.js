const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contact.controller");

router.get("/", ContactController.renderView);
router.post("/", ContactController.saveForm);

module.exports = router;
