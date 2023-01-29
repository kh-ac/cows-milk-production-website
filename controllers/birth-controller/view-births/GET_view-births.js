

const getViewBirths = (req , res) => {

    if (!require('../../session/check_login')(req,res))
        return res.redirect('/');

    const birthsJson = require('../../../models/birth').getBirths() ;

    return res.render('view-births' , { 
        births : birthsJson })

    
}

module.exports = getViewBirths ;