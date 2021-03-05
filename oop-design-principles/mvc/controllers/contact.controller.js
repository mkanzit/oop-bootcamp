const contactService = require("../services/contact.service");

module.exports = class Contact {
  static async apiRenderView(req, res, next) {
    res.render("contact");
  }

  static async apiSaveForm(req, res, next) {
    try {
      const createdContact = await contactService.createContact(req.body);
      res.json(createdContact);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
