

const postRegisterMilk = (req , res) => {

    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")

    const {date , quantity} = req.body;

    if (!require("../../../models/milk").registerMilk( true ,date , quantity )){
        req.session.error = "Could not register Daily Milk Production";
        return res.redirect("/dashboard");
    }

    req.session.success = "Daily Milk Production registered successfully"
    return res.redirect("/dashboard")
    

    

}

module.exports = postRegisterMilk;