var mongoose = require('mongoose');

var feedback_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date:{type: Date, default: Date.now},
    feetback:{type : String},
})

module.exports = mongoose. model('feedback',feedback_schema);