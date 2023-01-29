

const getEditBirth = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const id = req.query.id; 

    const birth = require("../../../models/birth").getBirthByID(id);

    const error = req.session.error
    delete req.session.error
    
        
    return res.render("edit-birth" , {
        user : req.session.user,
        error : error,
        birth : birth,
    })
}

module.exports = getEditBirth;