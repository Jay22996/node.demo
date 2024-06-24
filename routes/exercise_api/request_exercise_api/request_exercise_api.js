var express = require('express');
var router = express.Router();
const { exe_req, exe_req_delete } = require('../../../Controller/exercise/request_exercise_controller/request_exercise_controller');


//send request for new exercise
router.post("/sendexercisereq/:id",exe_req)

//delete new exercise request
router.post("/deleteexercisereq/:id",exe_req_delete)


module.exports = router;