const userQueries = require("../src/db/queries.users.js");
const passport = require("passport");

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };

    userQueries.createUser(newUser, (err, user) => {
      if (err) {
        console.log(err.message);
        res.send({ error: err.message });
      } else {
        passport.authenticate("local")(req, res, () => {
          console.log("You signed in!");
          res.send(req.user);
        });
      }
    });
  },

  signIn(req, res, next) {
    passport.authenticate("local")(req, res, function() {
      if (!req.user) {
        console.log("sign in failed");
      } else {
        console.log("You signed in!");
        res.send(req.user);
      }
    });
  },

  signOut(req, res, next) {
    req.logout();
    res.send("logged out");
    console.log("You successfully signed out!");
  }
};
