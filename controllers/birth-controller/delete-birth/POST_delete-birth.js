


const deleteBirth = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const {id} = req.body; 

    const isDeleted = require("../../../models/birth").deleteBirth(id)

    if (isDeleted){
        res.redirect(req.get('referer'));
    }

    else {
        res.redirect(req.get('referer'));    
    }
}



module.exports = deleteBirth;