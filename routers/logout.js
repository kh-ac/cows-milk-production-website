const express = require("express");

// express router
const router = express.Router();
// login / method: GET
router.get("/", require("../controllers/logout/GET_logout"));

module.exports = router;
