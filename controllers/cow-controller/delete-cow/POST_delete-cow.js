


const deleteCow = (req , res) => {

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