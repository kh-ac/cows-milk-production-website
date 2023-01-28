


const deleteExamination = (req , res) => {

    const {id} = req.body; 

    const isDeleted = require("../../../models/examination").deleteExamination(id)

    if (isDeleted){
        res.redirect("/dashboard");
    }

    else {
        res.redirect("/dashboard");    
    }
}



module.exports = deleteExamination;