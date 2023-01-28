

const checkLogin = (req , res ) => {

    if(req.session.isAuth)
        return true;
    
    return false;
}

module.exports = checkLogin;