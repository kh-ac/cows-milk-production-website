


const postEditBirth = (req,res) => {

    // if (!require("../session/check_login"))
    //     res.redirect("/")

    const {id , birthDate , motherID} = req.body;

    if (!require("../../../models/birth").registerBirth( id ,birthDate ,motherID )){
        req.session.error = "Could not register birth";
        return res.redirect("/register-birth");
    }

    req.session.success = "Birth registered successfully"
    return res.redirect("/dashboard")




    
        
}

module.exports = postEditBirth;