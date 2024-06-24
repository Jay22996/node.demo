var express = require("express");
const {
  website,
  websitef,
} = require("../../../Controller/for_kasrat/kasrat_website_controller/kasrat_website_controller");
var router = express.Router();

//get website data
router.get("/", website);

//update website data
router.post("/update", websitef);
// router.post('/a',w)
module.exports = router;
