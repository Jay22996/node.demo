var express = require("express");
const {
  announcement,
  announcementdelete,
  announcementfind,
  announcementupdate,
} = require("../../Controller/announcement/announcement_controlle");

var router = express.Router();

//create announcement
router.post("/announc/:id", announcement);

//delete announcement
router.post("/announcdelete/:id", announcementdelete);

//find announcement
router.get("/announcfind/:id", announcementfind);

//update announcement
router.post("/announcupdate/:id", announcementupdate);

module.exports = router;
