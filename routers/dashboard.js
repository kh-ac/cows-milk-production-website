const express = require("express");

const router = express.Router();
router.get("/", require("../controllers/dashboard/GET_dashboard"));

module.exports = router;
