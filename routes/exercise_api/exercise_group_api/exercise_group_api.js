var express = require('express');
var router = express.Router();
const { exercise_groupdelete, exercise_groupupdate, exercise_groupfindbyid, exercise_groupadd, exercise_groupitem, exercise_groupfindbygymid } = require('../../../Controller/exercise/exercise_groupcontroller/exercise_groupcontroller');


router.post('/exegroupitemadd/:id/:item_id',exercise_groupitem)

//create exercise group
router.post('/exegroupadd/:id',exercise_groupadd)

//find exercise group by gym id
router.get("/exgroupfindbugym/:id",exercise_groupfindbygymid)

//delete exercise group
router.get('/exgroupdelete/:id',exercise_groupdelete)

//update exercise group
router.post('/exgroupupdate/:id',exercise_groupupdate)

//find exercise group item
router.get("/exgroupfindbyid/:id",exercise_groupfindbyid)


module.exports = router;