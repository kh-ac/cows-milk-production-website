const getDashboard = (req, res) => {

    if (!(require("../session/check_login")(req, res)))
        return res.redirect("/");

    //
    const error = req.session.error;
    const success = req.session.success;

    delete req.session.error;
    delete req.session.success;

    return res.render("dashboard", {
        user: req.session.user,
        error: error,
        success: success,
    });

}

module.exports = getDashboard;
