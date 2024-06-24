var mongoose = require('mongoose');

var account_swipting_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date:{type: Date, default: Date.now},
    reason:{type : String},
})

module.exports = mongoose. model('account_swipting',account_swipting_schema);