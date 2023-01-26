const express = require('express');

const router = express.Router();




router.post("/" , require("../controllers/register-cow/POST_register-cow"))


module.exports = router;