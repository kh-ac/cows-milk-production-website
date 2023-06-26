const getViewExaminations = (req, res) => {
  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const examinationsJson = require("../../../models/examination").getExaminations();

  return res.render("view-examinations", {
    examinations: examinationsJson,
  });
};

module.exports = getViewExaminations;
