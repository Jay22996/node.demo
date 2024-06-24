var express = require("express");
const { Logingym, forget_pas, forget_pass } = require("../../../Controller/gym/auth_controller/auth_controller");
var router = express.Router();

//login gym
router.post("/login", Logingym);

//verify password
router.post("/verify", forget_pas);

//forgot password
router.post("/forget/:id", forget_pass);

module.exports = router;
