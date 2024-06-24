var express = require("express");
const {
  attendence,
  attenuser,
  attengym,
  attenuserday,
  atteshowgym,
} = require("../../../Controller/gym/attendance_controller/attendance_controller");
var router = express.Router();

//take attendance
router.post("/attendence/:id", attendence);

//user all attendance
router.get("/atteshowuser/:id", attenuser);

//gym all attendance
router.get("/atteshowgym/:id", attengym);

//user datewise attendance
router.get("/atteshowuser/:id/:day/:month/:year", attenuserday);

//gym datewise attendance
router.get("/atteshowgym/:id/:day/:month/:year", atteshowgym);

module.exports = router;
