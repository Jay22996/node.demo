var mongoose = require('mongoose');

var exereq_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date : {type : Date},
    exercise_name:{type:String}
})

module.exports = mongoose. model('new_exercise_req',exereq_schema);