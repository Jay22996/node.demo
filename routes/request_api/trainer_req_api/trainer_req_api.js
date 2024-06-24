var express = require("express");
const { sendreq, showreq, acceptreq, delete_reqq } = require("../../../Controller/request/trainer_req_controller/trainer_req_controller");
var router = express.Router();

//send trainer request
router.post("/sendreq/:id", sendreq);

//show traier request
router.get("/showtrainerreq/:id", showreq);

//accept trainer request
router.post("/acceptreq/:id", acceptreq);

//delete trainer request
router.get("/deletetreq/:id", delete_reqq);

module.exports = router;
