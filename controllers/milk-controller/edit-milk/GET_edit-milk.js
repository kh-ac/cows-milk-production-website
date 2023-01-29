

const getEditCow = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const id = req.query.id; 

    const milk = require("../../../models/milk").getMilkByID(id);

    

    const error = req.session.error
    delete req.session.error
    
        
    return res.render("edit-milk" , {
        user : req.session.user,
        error : error,
        milk : milk,
    })
}

module.exports = getEditCow;