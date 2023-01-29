const getEditCow = (req, res) => {

    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const id = req.query.id;

    const cow = require("../../../models/cow").getCowByID(id);

    const error = req.session.error;
    delete req.session.error;


    return res.render("edit-cow", {
        user: req.session.user,
        error: error,
        cow: cow,
    });
}

module.exports = getEditCow;
