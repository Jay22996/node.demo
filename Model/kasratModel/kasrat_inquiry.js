var mongoose = require('mongoose');

var kasratinquiry_schema = new mongoose.Schema({
    gym_name:{type: String},
    user_name:{type: String},
    user_num:{type: String},
    message:{type: String},
})

module.exports = mongoose. model('kasrat_inquiry',kasratinquiry_schema);