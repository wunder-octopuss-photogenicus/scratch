const db = require("../models/typingGameModels");
const bcrypt = require("bcryptjs");

const userController = {};

userController.verify = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const value = [username];
    const text = "SELECT * FROM accounts WHERE username = $1";
    const user = await db.query(text, value);
    if (user) {
      const validPass = await bcrypt.compare(password, user.rows[0].password);
      if (validPass) {
        res.locals.isLoggedIn = true;
        res.locals.user_id = user.rows[0].user_id;
        return next();
      } else {
        res.locals.isLoggedIn = false;
        res.locals.user_id = null;
        return next();
      }
    } else {
      res.locals.isLoggedIn = false;
      res.locals.user_id = null;
      return next();
    }
  } catch (err) {
    next({
      log: `userController.verify: ERROR: ${err}`,
      message: {
        err: "Error occured in userController.verify, check server logs for more details",
      },
    });
  }
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  value = [username, hash];
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
