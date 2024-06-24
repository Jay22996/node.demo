var express = require("express");
const {
  contactkasrat,
  findkasratfind,
} = require("../../../Controller/for_kasrat/contact_kasrat_controller/contact_kasrat_controller");
var router = express.Router();

//create contact
router.post("/contact", contactkasrat);

//show contact
router.get("/contactfind", findkasratfind);

module.exports = router;
