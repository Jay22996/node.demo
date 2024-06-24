var mongoose = require('mongoose');

var daily_data_schema = new mongoose.Schema({
    _id : {type: mongoose.Schema.Types.ObjectId, required: true},
    like : {type: Number},
    fire:{type: Number},
    post:{type: Number},
    attendance:{type: Number},
    work_out:{type: Number},
    diet:{type: Number},
    inquiry:{type: Number},
    user_req:{type: Number}
})

module.exports = mongoose. model('daily_data',daily_data_schema);