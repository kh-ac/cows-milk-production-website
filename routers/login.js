const express = require("express");
const postLogin = require("../controllers/login/POST_login");

// express router
const router = express.Router();


// login / method: GET
router.get("/" , (req , res)=>{
    res.render("login")
})

// login / method: POST
router.post("/login" , postLogin)

module.exports = router;