var express = require('express');
const { diet_group_add, diet_group_findgym, diet_group_findid, diet_group_update, diet_group_delete } = require('../../../Controller/food/Diat_group_controller/Diat_group_controller');
var router = express.Router();

//add diet group
router.post('/dietadd',diet_group_add)

//find diet group
router.get('/dietfindgym/:id',diet_group_findgym)

//find diet group item
router.get('/dietfindid/:id',diet_group_findid)

//diet_group_update
router.post('/dietupdate/:id',diet_group_update)

//diet group delete
router.get('/dietdelete/:id',diet_group_delete)


module.exports = router;