var express = require("express");
const { membersendreq, showuserreq, accepusertreq, delete_req } = require("../../../Controller/request/user_req_controller/user_req_controller");
var router = express.Router();

//send user request
router.post("/usersendreq/:id", membersendreq);

//show user request
router.get("/showuserreq/:id", showuserreq);

//accept user request
router.post("/useracceptreq/:id", accepusertreq);

//delete user request
router.get("/deleteureq/:id", delete_req);

module.exports = router;
