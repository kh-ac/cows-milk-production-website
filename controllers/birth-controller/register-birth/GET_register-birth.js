const getRegisterBirth = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  res.render("register-birth");
};

module.exports = getRegisterBirth;
