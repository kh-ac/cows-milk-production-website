const express = require("express");


const router = express.Router();
router.use(require("../controllers/404/GET_404-page"));

module.exports = router;

