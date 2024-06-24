var mongoose = require('mongoose');

var kasrat_contect_schema = new mongoose.Schema({
    name:{type: String},
    number:{type: String},
    email:{type: String},
    message:{type: String},
})

module.exports = mongoose. model('kasrat_contect',kasrat_contect_schema);