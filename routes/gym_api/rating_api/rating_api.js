var express = require("express");
const {
  rating,
  findretting,
} = require("../../../Controller/gym/rating_controller/rating_controller");
var router = express.Router();

//give rating
router.post("/rating/:id/:uid", rating);

//view rating
router.get("/findretting/:id", findretting);

module.exports = router;
