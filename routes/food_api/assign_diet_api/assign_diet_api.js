var express = require('express');
const { diet_assign, diet_show, diet_chack, diet_delete } = require('../../../Controller/food/Diet_assign_controller/Diet_assign_controller');
var router = express.Router();


//assign diet
router.post('/assigndiet/:id',diet_assign)

//show assign diet
router.get("/assignshow/:id",diet_show)

//check assign diet or not
router.get("/chackassign/:id",diet_chack)

//delete assign diet
router.get("/assigndelete/:id",diet_delete)


module.exports = router;