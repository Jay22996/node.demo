var express = require("express");
const { verify, register, forget_pas, forget_pass, login } = require("../../../Controller/user/auth_controller/auth_controller");
var router = express.Router();

//verify email id
router.post("/verify", verify);

//register user
router.post("/register", register);

//verify user
router.post("/verifyy", forget_pas);

//forgot password
router.post("/forget/:id", forget_pass);

//login api
router.post("/login", login);

module.exports = router;
