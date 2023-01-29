const postEditExamination = (req, res) => {

    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const {
        id,
        date,
        disease
    } = req.body;

    if (!require("../../../models/examination").registerExamination(id, date, disease)) {
        req.session.error = "Could not edit examination";
        return res.redirect("/dashboard");
    }

    req.session.success = "Examination edited successfully";
    return res.redirect("/dashboard");

}

module.exports = postEditExamination;
