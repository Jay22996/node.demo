var express = require("express");
const { addgym, findgym, findgymbyid, updategym, detelegym } = require("../../../Controller/gym/gym_controller/gym_controller");
var router = express.Router();

//add gym
router.post("/addgym", addgym);

//find gym
router.get("/findgym", findgym);

//find gym by id
router.get("/findgymbyid/:id", findgymbyid);

//update gym
router.post("/updategym/:id", updategym);

//delete gym
router.post("/detelegym/:id", detelegym);

module.exports = router;
