module.exports = class About {
  static async renderView(req, res, next) {
    res.render("about");
  }
};
