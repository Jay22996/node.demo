var mongoose = require('mongoose');

var chalange_schema = new mongoose.Schema({
    participate : [{
        participates : {type: mongoose.Schema.Types.ObjectId,ref:'Participate_detail'},
        user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    }],
    chalange_name : {type : String},
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    chalange_group : {type : String},
    date : {type:Date}
})

module.exports = mongoose. model('chalange_detail',chalange_schema);