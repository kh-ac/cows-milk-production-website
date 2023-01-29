const getLogin = (req, res) => {

    if (require("../session/check_login")(req, res))
        return res.redirect("/dashboard");

    return res.render("login");
}

module.exports = getLogin;
