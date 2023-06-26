const postEditCow = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { date, quantity } = req.body;

  if (!require("../../../models/milk").registerMilk(false, date, quantity)) {
    req.session.error = "Could not edit milk production";
    return res.redirect("/dashboard");
  }

  req.session.success = "Milk production edited successfully";
  return res.redirect("/dashboard");
};

module.exports = postEditCow;
