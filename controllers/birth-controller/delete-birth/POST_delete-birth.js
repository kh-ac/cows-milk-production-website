const deleteBirth = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { id } = req.body;

  if (!require("../../../models/birth").deleteBirth(id)) {
    req.session.error = "Could not delete birth";
    return res.redirect("/dashboard");
  }

  req.session.success = "Birth deleted successfully";
  res.redirect("/dashboard");
};

module.exports = deleteBirth;
