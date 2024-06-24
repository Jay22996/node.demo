var express = require('express');
const { remove } = require('../../../Controller/gym/remove_trainer_controller/remove_trainer_controller');
var router = express.Router();


//remove trainer or receip... from gym
router.post("/removet/:id",remove)

module.exports = router;