var express = require("express");
const { addreport, findreport, updatereport, deletereport } = require("../../../Controller/user/user_report_controller/user_report_controller");
var router = express.Router();

//add report
router.post("/reportadd/:id", addreport);

//find report
router.get("/reportfind/:id", findreport);

//update report
router.post("/reportupdate/:id", updatereport);

//delere report
router.get("/reportdelete/:id", deletereport);

module.exports = router;
