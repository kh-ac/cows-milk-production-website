

const postRegisterBirth = (req , res) => {


    const {id , birthDate , motherID} = req.body;

    if (!require("../../../models/birth.js").registerBirth(id , birthDate , motherID)) {

        return res.redirect("/register-birth");

    }

    return res.redirect("/dashboard")


}

module.exports = postRegisterBirth;