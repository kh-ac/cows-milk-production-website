const getEditExamination = (req, res) => {

    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const id = req.query.id;

    const examination = require("../../../models/examination").getExaminationByID(id);

    const error = req.session.error;
    delete req.session.error;

    return res.render("edit-examination", {
        user: req.session.user,
        error: error,
        examination: examination,
    });
}

module.exports = getEditExamination;
