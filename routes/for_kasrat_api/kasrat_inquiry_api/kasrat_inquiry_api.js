var express = require("express");
const { inquirykasratfind,inquirykasrat} = require("../../../Controller/for_kasrat/kasrat_inquiry_controller/kasrat_inquiry_controller");
var router = express.Router();

//send inquiry to kasrat
router.post("/inquiry", inquirykasrat);

//find inquiry
router.get("/inquiryfind", inquirykasratfind);

module.exports = router;
