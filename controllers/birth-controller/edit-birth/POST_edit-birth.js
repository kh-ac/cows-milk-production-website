const postEditBirth = (req, res) => {

    if (!require("../../session/check_login"))
        res.redirect("/");

    const {
        id,
        birthDate,
        motherID
    } = req.body;

    if (!require("../../../models/birth").registerBirth(id, birthDate, motherID)) {
        req.session.error = "Could not edit birth";
        return res.redirect("/dashboard");
    }

    req.session.success = "Birth edited successfully";
    return res.redirect("/dashboard");

}

module.exports = postEditBirth;

