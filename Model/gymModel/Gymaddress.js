var mongoose = require('mongoose');

var gym_address_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    address:{type : String},
    city:{type : String},
    county:{type : String},
    pin_code:{type : Number},
    state:{type : String},
})

module.exports = mongoose. model('gym_address',gym_address_schema);
