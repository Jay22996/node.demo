var mongoose = require('mongoose');

var monthy_data_schema = new mongoose.Schema({
    _id : {type: mongoose.Schema.Types.ObjectId, required: true},
    challenge : {type: Number},
    participante:{type: Number},
})

module.exports = mongoose. model('monthy_data',monthy_data_schema);