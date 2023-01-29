


const deleteMilk = (req , res) => {
    if (!require("../../session/check_login")(req,res))
        return res.redirect("/")
    const {date} = req.body; 
  

    const isDeleted = require("../../../models/milk").deleteMilk(date)

    if (isDeleted){
        res.redirect(req.get('referer'));
    }

    else {
        res.redirect(req.get('referer'));    
    }
}



module.exports = deleteMilk;