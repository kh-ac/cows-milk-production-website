const deleteExamination = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { id } = req.body;

  if (!require("../../../models/examination").deleteExamination(id)) {
    req.session.error = "Could not delete examination";
    return res.redirect("/dashboard");
  }

  req.session.success = "Examination deleted successfully";
  res.redirect("/dashboard");
};

module.exports = deleteExamination;
