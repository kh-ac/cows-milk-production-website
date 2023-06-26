const deleteCow = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { id } = req.body;

  if (!require("../../../models/cow").deleteCow(id)) {
    req.session.error = "Could not delete cow";
    return res.redirect("/dashboard");
  }

  req.session.success = "Cow deleted successfully";
  res.redirect("/dashboard");
};

module.exports = deleteCow;
