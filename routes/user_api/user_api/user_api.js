var express = require("express");
const { useradd, updateuser, finduser, finduserbyid, followersshow, followers, unfollowers, gymfollowersshow } = require("../../../Controller/user/user_controller/user_controller");
var router = express.Router();

//add user
router.post("/useradd", useradd);

//update user
router.post("/updateuser/:id", updateuser);

//find all user
router.get("/finduser", finduser);

//find user by id
router.get("/finduser/:id", finduserbyid);

//gym user data
router.get("/gymdata/:id", gymfollowersshow);

//show user data
router.get("/userdata/:id", followersshow);


//follow user
router.get("/followers/:id/:otherid/:from/:to", followers);

//unfollow user
router.get("/unfollowers/:id/:otherid/:from/:to", unfollowers);

module.exports = router;
