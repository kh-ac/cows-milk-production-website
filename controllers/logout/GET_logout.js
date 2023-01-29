const postLogout = (req, res) => {

    req.session.user = null;

    return res.redirect("/");

}

module.exports = postLogout;
