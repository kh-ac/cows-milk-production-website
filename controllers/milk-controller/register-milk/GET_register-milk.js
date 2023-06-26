const getRegisterMilk = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const error = req.session.error;
  delete req.session.error;

  return res.render("register-milk", {
    user: req.session.user,
    error: error,
  });
};

module.exports = getRegisterMilk;
