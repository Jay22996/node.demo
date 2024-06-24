var mongoose = require('mongoose');

var memberreq_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date:{type: Date},
    start_date : {type: Date},
    end_date : {type: Date},
    plan:{type:String},
    reason:{type:String},
    comment:{type:String},
    ref:{type:String},
    ref_method:{type:String},
    refPersonOnKasrat:{type:String},
    renewal:{type:String}
})

module.exports = mongoose. model('memberreq_model',memberreq_schema);