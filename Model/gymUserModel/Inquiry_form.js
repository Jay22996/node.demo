var mongoose = require('mongoose');

var inquiry_form_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    // user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    user_name:{type: String},
    user_num:{type: String},
    date:{type: Date},
    plan : {type: String},
    comment:{type:String},
    medical_issue : {type: String},
    do_gym:{type:String},
    action:[{
        name:{type:String},
        reason:{type:String},
        date:{type:Date,default:new Date()}
    }],
})

module.exports = mongoose. model('inquiry_form',inquiry_form_schema);