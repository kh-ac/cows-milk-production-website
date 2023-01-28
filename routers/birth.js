const express = require("express")

const router = express.Router();




router.post("/delete" , require("../controllers/birth-controller/delete-birth/POST_delete-birth"))
router.get("/edit"  , require("../controllers/birth-controller/edit-birth/GET_edit-birth"))
router.post("/edit" , require("../controllers/birth-controller/edit-birth/POST_edit-birth"))
router.get("/register" , require("../controllers/birth-controller/register-birth/GET_register-birth.js"));
router.post("/register" , require("../controllers/birth-controller/register-birth/POST_register-birth.js"));
router.get("/view" , require("../controllers/birth-controller/view-births/GET_view-births"));


module.exports = router;