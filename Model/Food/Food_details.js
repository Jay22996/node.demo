var mongoose = require('mongoose');

var food_schema = new mongoose.Schema({
    
    food_name : {type : String},
    food_photo:{type : String},
    cal_gain:{type : Number,default:0.0}
})

module.exports = mongoose. model('food_detail',food_schema);