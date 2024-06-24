var mongoose = require('mongoose');

var exercise_item_schema = new mongoose.Schema({

    e_g_id : {type: mongoose.Schema.Types.ObjectId,ref:'exercise_group'},
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    reps : [{type : Number}],
    total_rep:{type:Number},
    cal_burn:{type:Number},
    exercise_name:{type:String},
    time: { type:String },
    e_num : {type : Number},
    find:{type:String},
    exercise :{type: mongoose.Schema.Types.ObjectId,ref:'all_exercise'},
    exercise_photo : {type:String}
})

module.exports = mongoose. model('exercise_item',exercise_item_schema);