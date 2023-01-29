


const postEditExamination = (req,res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const {id , date , disease} = req.body;

    if (!require("../../../models/examination").registerExamination( id , date , disease )){
        req.session.error = "Could not register cow";
        return res.redirect("/cow/register");       
    }

    req.session.success = "Cow registered successfully"
    return res.redirect("/dashboard")




    
        
}

module.exports = postEditExamination;