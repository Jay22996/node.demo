var mongoose = require('mongoose');

var assign_schema = new mongoose.Schema({

    user_id:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    diet_group_id:{type: mongoose.Schema.Types.ObjectId,ref:"Diet_group"},
    diet_list : [{
        diet_list_id:{type: mongoose.Schema.Types.ObjectId,ref:"Diet_group_item"}
    }]
})

module.exports = mongoose. model('assign_item',assign_schema);