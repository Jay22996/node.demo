var express = require("express");
var router = express.Router();

const {
  exercise_list_remove,
  exercise_item,
  exercise_itemfind,
  exercise_itemdelete,
} = require("../../../Controller/exercise/exercise_itemcontroller/exercise_itemcontroller");

//exercise item remove from list
router.get("/exlistremove/:id/:lid", exercise_list_remove);

//add exercise in exercise group
router.post("/exeitemadd/:gnid/:gid", exercise_item);

//find exercise item
router.get("/exeitemfind", exercise_itemfind);

//delete exercise item
router.get("/exeitemdelete", exercise_itemdelete);

module.exports = router;
