const express = require("express");

const router = express.Router();
router.get("/view", require("../controllers/examination-controller/view-examinations/GET_view-examinations"));
router.post("/delete", require("../controllers/examination-controller/delete-examination/POST_delete-examination"));
router.get("/edit", require("../controllers/examination-controller/edit-examination/GET_edit-examination"));
router.post("/edit", require("../controllers/examination-controller/edit-examination/POST_edit-examination"));
router.get("/register", require("../controllers/examination-controller/register-examination/GET_register-examination"));
router.post(
  "/register",
  require("../controllers/examination-controller/register-examination/POST_register-examination")
);

module.exports = router;
