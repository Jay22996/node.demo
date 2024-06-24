var express = require('express');
var router = express.Router();

const { assign_add, assign_perform, assign_show, assign_delete, assign_day_wise, chack_assign } = require('../../../Controller/exercise/Assign_exercisecontroller/Assign_exercisecontroller');


//check assign or not
router.get("/chaqeassign/:id",chack_assign)

//asssign exercise
router.post("/assignexe/:id",assign_add)

//delete assign
router.get("/deleteassign/:id",assign_delete)

//assign exercise show
// router.get("/assignexeshow/:id",assign_show)

//show assign exercise day wise
router.get("/assign_day_wise/:id/:day/:month/:year",assign_day_wise)

//perform exercise (yes or no)
router.post("/assign_perform/:id/:pid",assign_perform)

module.exports = router;