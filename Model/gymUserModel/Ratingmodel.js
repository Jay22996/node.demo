var mongoose = require("mongoose")

var Rating_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    time: { type: Date, default: Date.now },
    gt_id: {type: mongoose.Schema.Types.ObjectId,ref:'User_register',ref:'gym_detail'},
    rating:{type : Number,default:0.0},
    comment:{type : String},
})
module.exports = mongoose. model('rating',Rating_schema)