const postRegisterExamination = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { id, date, disease } = req.body;

  if (!require("../../../models/examination").registerExamination(id, date, disease)) {
    req.session.error = "Could not register Examination";
    return res.redirect("/dashboard");
  }

  req.session.success = "Examination registered successfully";
  return res.redirect("/dashboard");
};

module.exports = postRegisterExamination;
