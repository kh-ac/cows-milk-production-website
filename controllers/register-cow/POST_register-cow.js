

const postRegisterCow = (req , res) => {

    if (!require("../session/check_login")(req,res))
        return res.render("login")

    

    
}

module.exports = postRegisterCow;