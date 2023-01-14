const express = require("express");
const path = require("path");
const app = express();
const wordsController = require("./controller/wordsController.js");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
}); //for production mode?

//get request to '/startsession, call 3rd api to send a paragraph of text
app.get("/newgame", wordsController.getWords, (req, res) => {
  res.status(200).send(res.locals.quoteText);
});

app.use("*", (req, res) => res.status(404).send("Page Not Found"));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});

module.exports = app;
