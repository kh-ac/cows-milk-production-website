

const postRegisterCow = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/");

    const { id ,birthDate , startDate , breed , motherID } = req.body;

    if (!require("../../../models/cow").registerCow( id ,birthDate , startDate , breed , motherID )){
        req.session.error = "Could not register cow";
        return res.redirect("/register-cow");
    }

    req.session.success = "Cow registered successfully"
    return res.redirect("/dashboard")

}

module.exports = postRegisterCow;