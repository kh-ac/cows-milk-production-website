const checkLogin = (req, res) => {

    if (req.session.user)
        return true;

    return false;
}

module.exports = checkLogin;
