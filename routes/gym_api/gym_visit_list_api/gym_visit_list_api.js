var express = require("express");
const { addlist, list_show, list_show_all } = require("../../../Controller/gym/gym_visit_list_controller/gym_visit_list_controller");
var router = express.Router();

//add to visit list
router.post("/addtolist/:id", addlist);

//show gymwise visit data
router.get("/showlist/:id", list_show);

//show all visit data
router.get("/showalllist", list_show_all);

module.exports = router;
