var express = require("express");
const { addpost, showpost, like, unlike, fire, unfire, updatepost, deletepost } = require("../../Controller/post/Postcontroller");
var router = express.Router();

//add post
router.post("/addpost", addpost);

//show post
router.get("/showpost", showpost);

//like post
router.post("/like/:id", like);

//dislike post
router.post("/unlike/:id", unlike);

//fire post
router.post("/fire/:id", fire);

//unfire post
router.post("/unfire/:id", unfire);

//update post
router.post("/updatepost/:id", updatepost);

//delete post
router.post("/deletepost/:id", deletepost);

module.exports = router;
