const express = require('express');

const router = express.Router();

router.get("/view" , require("../controllers/milk-controller/view-milk/GET_view-milk"));
router.post("/delete" , require("../controllers/milk-controller/delete-milk/POST_delete-milk"))
router.get("/edit"  , require("../controllers/milk-controller/edit-milk/GET_edit-milk"))
router.post("/edit" , require("../controllers/milk-controller/edit-milk/POST_edit-milk"))
router.get("/register" , require("../controllers/milk-controller/register-milk/GET_register-milk"))
router.post("/register" , require("../controllers/milk-controller/register-milk/POST_register-milk"))



module.exports = router;