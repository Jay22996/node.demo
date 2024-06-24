var mongoose = require('mongoose');

var Diet_group_item_schema = new mongoose.Schema({

    diet_group_id:{type: mongoose.Schema.Types.ObjectId,ref:'Diet_group'},
    food_id:{type: mongoose.Schema.Types.ObjectId,ref:"food_detail"},
    quantity : {type : Number,default:0.0},
    type:{type:String},
    day:{type : String},
    food_name:{type : String},
    food_photo:{type : String},
    food_call_gain:{type : Number,default:0.0},
    time:{type : String}
})

module.exports = mongoose. model('Diet_group_item',Diet_group_item_schema);