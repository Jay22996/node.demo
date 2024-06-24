var mongoose = require('mongoose');

var Account_delete_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date:{type: Date, default: Date.now},
    reason:{type : String},
})

module.exports = mongoose. model('account_delete_req',Account_delete_schema);