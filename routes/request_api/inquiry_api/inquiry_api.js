var express = require("express");
const { inquirysend, inquirydelete, inquiryfind, inquiryactione, inquiryactioneupdate } = require("../../../Controller/request/inquiry_controller/inquiry_controller");
var router = express.Router();

//send inquiry
router.post("/inquirysend/:id", inquirysend);

//delete inquiry
router.get("/inquirydelete/:id", inquirydelete);

//find inquiry by gym id
router.get("/inquiryfind/:id", inquiryfind);

//take action in inquiry
router.post("/inquiryaction/:id", inquiryactione);

//update inquiry
router.post("/inquiryupdate/:id", inquiryactioneupdate);

module.exports = router;
