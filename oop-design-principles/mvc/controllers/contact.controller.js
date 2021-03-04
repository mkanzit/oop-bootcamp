module.exports = class Contact {
  static async renderView(req, res, next) {
    res.render("contact");
  }

  static async saveForm(req, res, next) {
    res.render("contact");
  }
};
