


const deleteMilk = (req , res) => {

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