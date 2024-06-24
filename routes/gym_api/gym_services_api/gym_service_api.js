var express = require("express");
const { addservice, findservice, updateservice, Deleteservice } = require("../../../Controller/gym/gym_services_controller/gym_service_controller");
var router = express.Router();

//add services
router.post("/addservice/:id", addservice);

//find services
router.get("/findservice", findservice);

//update services
router.get("/updateservice/:id", updateservice);

//delet services
router.get("/deleteservice/:id", Deleteservice);

module.exports = router;
