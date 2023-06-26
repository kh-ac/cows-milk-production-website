const postRegisterCow = (req, res) => {
  console.log(req);

  if (!require("../../session/check_login")(req, res)) return res.redirect("/");

  const { id, birthDate, startDate, breed, motherID } = req.body;

  if (!require("../../../models/cow").registerCow(id, birthDate, startDate, breed, motherID)) {
    req.session.error = "Mother ID does not exist";
    return res.redirect("/dashboard");
  }

  req.session.success = "Cow registered successfully";
  return res.redirect("/dashboard");
};

module.exports = postRegisterCow;
