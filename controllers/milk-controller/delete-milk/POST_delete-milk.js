const deleteMilk = (req, res) => {
    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const {
        date
    } = req.body;


    if (!require("../../../models/milk").deleteMilk(date)) {
        req.session.error = "Could not delete milk production";
        return res.redirect("/dashboard");
    }

    req.session.success = "Milk production deleted successfully";
    res.redirect("/dashboard");
}



module.exports = deleteMilk;
