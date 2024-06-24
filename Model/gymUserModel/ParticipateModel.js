var mongoose = require('mongoose');

var Participate_schema = new mongoose.Schema({
   
    userid : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    attendance : {type : Number,default:0},
    post : {type : Number,default:0},
    chalange_id :{type: mongoose.Schema.Types.ObjectId,ref:'chalange_detail'},
    date:{type:Date}
})

module.exports = mongoose. model('Participate_detail',Participate_schema);