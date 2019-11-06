const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {},

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
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");

    let user = await db.auth.login({ username });
    user = user[0];

    if (!user) {
      return res.sendStatus(404);
    }
    let authenticated = bcrypt.compareSync(password, user.password);
    if (authenticated) {
      delete user.password;
      session.user = user;

      res.status(200).send(session.user);
    } else {
      res.sendStatus(401)
    }
  }
};
