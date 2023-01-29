const postRegisterBirth = (req, res) => {

    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const {
        id,
        birthDate,
        motherID
    } = req.body;

    if (!require("../../../models/birth.js").registerBirth(id, birthDate, motherID)) {

        req.session.error = "Birth Registration Failed";
        return res.redirect("/dashboard");
    }

    req.session.success = "Birth Registration Successful";
    return res.redirect("/dashboard");

}

module.exports = postRegisterBirth;

