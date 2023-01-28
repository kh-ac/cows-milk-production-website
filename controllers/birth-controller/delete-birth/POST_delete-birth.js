


const deleteBirth = (req , res) => {

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