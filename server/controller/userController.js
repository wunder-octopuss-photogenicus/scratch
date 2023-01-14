const db = require("../models/typingGameModels");

const userController = {};

userController.verify = (req, res, next) => {
  const { username, password } = req.body;
  const value = [username, password];
  const text =
    "SELECT user_id FROM accounts WHERE username = $1 AND password = $2";
  db.query(text, value)
    .then((data) => {
      res.locals.isLoggedIn = true;
      res.locals.user_id = data.rows[0].user_id;
      return next();
    })
    .catch((err) => console.log(err));
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  value = [username, password];
  text =
    "INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING user_id";
  db.query(text, value)
    .then((data) => {
      res.locals.newChar = true;
      res.locals.user_id = data.rows[0].user_id;
      return next();
    })
    .catch((err) => {
      next({
        log: `userController.createUser: ERROR: ${err}`,
        message: {
          err: "Error occured in userController.createUser, check server logs for more details",
        },
      });
    });
};

// userController.getUser = (req, res, next) => {
//   const { username } = req.body;
//   text = "";
// };

module.exports = userController;
