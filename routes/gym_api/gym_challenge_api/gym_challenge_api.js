var express = require("express");
const {
  add_chalange,
  accept_chalange,
  accept_chalang,
  show_chalange,
  show_chalangeid,
  show_chalangegyid,
  update_chalange,
  delete_chalange,
} = require("../../../Controller/gym/gym_challenge_controller/gym_challenge_controller");
var router = express.Router();

//add challenge
router.post("/addchalange", add_chalange);

//accept challenge
router.post("/acceptchalange/:id/:uid", accept_chalange);

//check participate or not
router.post("/acceptchalangereapit/:id/:uid", accept_chalang);

//show challenges
router.get("/showchalange", show_chalange);

//show user current participant challenge
router.get("/show_chalangeid/:id", show_chalangeid);

//show gym all challenges
router.get("/show_chalangegyid/:id", show_chalangegyid);

//update challenges
router.post("/updatechalangeid/:id", update_chalange);

//delete challenges
router.get("/deletechalangeid/:id", delete_chalange);

module.exports = router;
