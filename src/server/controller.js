const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const {
      password,
      username,
      email,
      firstname: first_name,
      lastName: last_name
    } = req.body;
    const { session } = req;
    const db = req.app.get("db");
  }
};
