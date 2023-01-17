const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.user_id) {
    res.cookie("ssid", res.locals.user_id, { httpOnly: true });
  }
  return next();
};

module.exports = cookieController;
