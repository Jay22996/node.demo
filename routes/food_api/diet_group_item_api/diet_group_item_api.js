var express = require('express');
const { addgroupitem, groupiddelete } = require('../../../Controller/food/Diet_group_item_controller/Diet_group_item_controller');
var router = express.Router();

//add diet item
router.post('/dietitemadd/:gid',addgroupitem)

//delete diet item
router.get('/dietitemdelete/:id/:did',groupiddelete)


module.exports = router;