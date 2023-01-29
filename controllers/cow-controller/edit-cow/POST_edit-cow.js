const POSTeditCow = (req, res) => {

    if (!require("../../session/check_login"))
        res.redirect("/");

    const {
        id,
        birthDate,
        startDate,
        breed,
        motherID
    } = req.body;

    if (!require("../../../models/cow").registerCow(id, birthDate, startDate, breed, motherID)) {
        req.session.error = "Could not edit cow";
        return res.redirect("/dashboard");
    }

    req.session.success = "Cow edited successfully";
    return res.redirect("/dashboard");

}

module.exports = POSTeditCow;
