var mongoose = require('mongoose');

var invoice_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    accept_date : {type:Date,default:new Date()},
    start_date : {type : Date},
    end_date :{type : Date},
    plan : {type : String},
    reason: {type : String},
    comment:{type : String},
    amount:{type :Number},
    paymant_list: [{    
        paymant : {type :Number},
        date : {type :Date}
    }],
    type : {type : String},
    gym_address:{type : String},
    remain:{type : Number},
    due_date:{type : Date},
    accept_by:{type: String},
    old_bid: {    type: [mongoose.Schema.Types.ObjectId, String],
        ref: 'invoice',
        default: null},
    ubgrade:{type : String},
    p_method:{type : String},
    ref:{type : String},
    ref_method:{type : String}

})

module.exports = mongoose. model('invoice',invoice_schema);