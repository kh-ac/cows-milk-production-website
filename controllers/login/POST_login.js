const userExist = require("../../models/user");


postLogin = (req , res) => {

    const { username , password } = req.body;

    // check if username and password are provided
    if (!username || !password)
        return res.render("login" , {error : "Username and Password are required"})

    // check if username and password are correct
    const user = userExist(username , password);
    
    // 
    if (!user)
        return res.render("login" , {error : "Username or Password is incorrect"})

    req.session.user = user;
    req.session.isAuth = true;

    // redirect to dashboard (home page)
    return res.redirect("dashboard")
}

module.exports = postLogin

