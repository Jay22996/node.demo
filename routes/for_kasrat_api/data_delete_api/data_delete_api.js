var express = require("express");
const {
  send_req,
  delete_req,
} = require("../../../Controller/for_kasrat/data_delete_controller/data_delete_controlleri");
var router = express.Router();

//send data delete request
router.post("/datadelete", send_req);

//delete data delete request
router.get("/deletereq/:id", delete_req);

module.exports = router;
