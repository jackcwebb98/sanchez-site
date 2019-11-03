const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const {
      password,
      username,
      email,
      firstName: first_name,
      lastName: last_name
    } = req.body;
    const { session } = req;
    const db = req.app.get("db");
  },

  getUser: async (req, res) => {
    const db = req.app.get("db");
    try {
      let user = await db.auth.getUser();
      user = user[0];
      if (!user) {
        res.sendStatus(404);
      } else {
        res.status(200).send(user);
      }
    } catch (error) {
      console.log(error);
    }
  },
  sessionTest: (req, res) => {
    const { session } = req;
    console.log(session);

    try {
      if (session) {
        res.send(session);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
