var mongoose = require('mongoose');

var trainerreq_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    trainer_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    role:{type: String},
    date:{type: Date}
})

module.exports = mongoose. model('trainerreq_model',trainerreq_schema);