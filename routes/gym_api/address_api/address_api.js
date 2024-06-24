var express = require("express");
const { add_address, update_address } = require("../../../Controller/gym/address_controller/address_controller");
var router = express.Router();

//add address
router.post("/addaddress/:id", add_address);

//update address
router.post("/updateaddress/:id", update_address);

module.exports = router;
