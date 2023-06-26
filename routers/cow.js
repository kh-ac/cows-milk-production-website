const express = require("express");

const router = express.Router();
router.get("/view", require("../controllers/cow-controller/view-cows/GET_view-cows"));
router.post("/delete", require("../controllers/cow-controller/delete-cow/POST_delete-cow"));
router.get("/edit", require("../controllers/cow-controller/edit-cow/GET_edit-cow"));
router.post("/edit", require("../controllers/cow-controller/edit-cow/POST_edit-cow"));
router.get("/register", require("../controllers/cow-controller/register-cow/GET_register-cow"));
router.post("/register", require("../controllers/cow-controller/register-cow/POST_register-cow"));

module.exports = router;
