var mongoose = require('mongoose');

var servic_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    date : {type : Date},
    wight : {type : String},
    height : {type : String},
    neck : {type : String},
    shoulder : {type : String},
    chest : {type : String},
    upper_arm : {type : String},
    waist : {type : String},
    upper_abdoment : {type : String},
    lower_abdoment : {type : String},
    hips : {type : String},
    fat : {type : String},
    rm : {type : String},
    bmi:{type : String}


})

module.exports = mongoose. model('User_report',servic_schema);