


const deleteCow = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const {id} = req.body; 

    const isDeleted = require("../../../models/cow").deleteCow(id)

    if (isDeleted){
        res.redirect("/dashboard");
    }
    else {
        res.redirect("/dashboard");    
    }
}



module.exports = deleteCow;