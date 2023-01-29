const express = require("express");


// express router
const router = express.Router();
// login / method: GET
router.get("/", require("../controllers/login/GET_login"))
// login / method: POST
router.post("/login", require("../controllers/login/POST_login"))

module.exports = router;
