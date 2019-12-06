const bcrypt = require("bcryptjs");

module.exports = {
  getUser: async (req, res) => {
    const { session } = req;

    try {
      if (!session.user) {
        res.sendStatus(404);
      } else {
        res.status(200).send(session.user);
      }
    } catch (error) {
      console.log(error);
    }
  },
  register: async (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    try {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      let user = await db.auth.createUser({
        username,
        password: hash,
        first_name: firstName,
        last_name: lastName
      });
      user = user[0];
      session.user = user;
      res.status(200).send(session.user)
    } catch (e) {
      res.send(e)
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
      res.sendStatus(401);
    }
  },
  logout: (req, res) => {
    req.session.destroy(function() {
      res.sendStatus(200);
    });
  }
};
