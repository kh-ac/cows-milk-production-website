

const getRegisterExamination = (req , res) => {

    // if (!require("../session/check_login")(req,res))
    //     return res.redirect("/")

    const error = req.session.error
    delete req.session.error

    return res.render("register-examination" , {
        user : req.session.user,
        error : error,
    })

}

module.exports = getRegisterExamination;