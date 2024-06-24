var express = require("express");
const { account_swip_req, account_swip_accsept, account_swip_show, account_swip_showall, account_swip_req_delete } = require("../../../Controller/for_kasrat/swip_req_controller/swip_req_controller");

var router = express.Router();

//send swip request
router.post("/swipreqsend", account_swip_req);

//accept swip request
router.post("/acceptswipreq/:id", account_swip_accsept);

//show swip request
router.post("/swipreqshow/:id", account_swip_show);

//show all swip request
router.post("/swipreqshowall", account_swip_showall);

//delete swip request
router.post("/swipreqdelet/:id", account_swip_req_delete);

module.exports = router;
