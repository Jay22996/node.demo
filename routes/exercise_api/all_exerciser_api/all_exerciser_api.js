var express = require('express');
const { deleteexercise, findexercise, updateexercise, addexercise } = require('../../../Controller/exercise/all_exerciser_controller/Allexercisecontroller');
var router = express.Router();

router.post('/addexercise',addexercise)
router.post('/updateexercise/:id',updateexercise)
router.get('/findexercise',findexercise)
router.get('/deleteexercise',deleteexercise)



module.exports = router;