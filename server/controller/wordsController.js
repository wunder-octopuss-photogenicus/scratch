const db = require("../models/typingGameModels");
const fetch = require("node-fetch");

const wordsController = {};

wordsController.getWords = (req, res, next) => {
  fetch("https://api.quotable.io/random?minLength=200")
    .then((data) => data.json())
    .then((data) => {
      console.log(data.content);
      res.locals.quoteText = data.content;
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
