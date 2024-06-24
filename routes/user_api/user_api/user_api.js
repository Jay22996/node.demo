var express = require("express");
const { useradd, updateuser, finduser, finduserbyid, followersshow, followers, unfollowers } = require("../../../Controller/user/user_controller/user_controller");
var router = express.Router();

//add user
router.post("/useradd", useradd);

//update user
router.post("/updateuser/:id", updateuser);

//find all user
router.get("/finduser", finduser);

//find user by id
router.get("/finduser/:id", finduserbyid);

//show user data
router.get("/userdata/:id", followersshow);

//follow user
router.get("/followers/:id/:otherid", followers);

//unfollow user
router.get("/unfollowers/:id/:otherid", unfollowers);

module.exports = router;
