var mongoose = require('mongoose');

var exercise_schema = new mongoose.Schema({
    exercise_name : {type : String},
    exercise_video : {type : String},
    exercise_photo : {type : String},
    details:{type : String},
    calo_burned : {type : Number}
})

module.exports = mongoose. model('all_exercise',exercise_schema);