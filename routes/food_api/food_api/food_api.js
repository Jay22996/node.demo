var express = require("express");
const { addfood, findfood, updatefood, deletefood } = require("../../../Controller/food/Food_details_controller/Food_details_controller");


var router = express.Router();

// add food
router.post("/addfood", addfood);

//find food
router.get("/findfood", findfood);

//update food
router.post("/foodupdate/:id", updatefood);

//delete food
router.get("/fooddelete/:id", deletefood);

module.exports = router;
