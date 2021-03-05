const Contact = require("../models/Contact");

module.exports = class ContactService {
  static async createContact(data) {
    try {
      const newContact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };

      const response = await new Contact(newContact).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
