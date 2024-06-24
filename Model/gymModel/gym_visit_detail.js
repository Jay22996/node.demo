var mongoose = require('mongoose');

var gymvisit_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    list :[{
        user_id:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
        date : {type : Date},
    }]
})

module.exports = mongoose. model('gym_visit_list',gymvisit_schema);