const db = require("../models/typingGameModels");
const fetch = require("node-fetch");

const wordsController = {};

wordsController.getWords = (req, res, next) => {
  // fetch("https://api.quotable.io/random?minLength=200")
  fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then((data) => data.json())
    .then((data) => {
      res.locals.quoteText = data.joke;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        log: `wordsController.getWords: ${err}`,
        message: {
          err: "wordsController.getWords: ERROR: Incorrect data received",
        },
      });
    });
};

wordsController.addScores = (req, res, next) => {
  const { cookie } = req.headers;
  console.log(cookie, typeof cookie); //ssid=37
  const id = Number(cookie.slice(5));
  const { wpm, cpm, accuracy } = req.body;
  value = [wpm, cpm, accuracy, id];
  text = `INSERT INTO profiles (wpm, cpm, accuracy, user_id) VALUES ($1, $2, $3, $4) `;
  db.query(text, value)
    .then((data) => {
      res.locals.newScore = data.rows[0];
      return next();
    })
    .catch((err) => {
      next({
        log: `userController.addScores: ERROR: ${err}`,
        message: {
          err: "Error occured in userController.addScores, check server logs for more details",
        },
      });
    });
};

module.exports = wordsController;
