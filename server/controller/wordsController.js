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

module.exports = wordsController;
