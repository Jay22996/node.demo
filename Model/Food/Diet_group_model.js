var mongoose = require('mongoose');

var Diet_group_schema = new mongoose.Schema({

    group_name : {type : String},
    gym_id:{type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'},
    diet_item_list:[{
        diet_group_list:{type: mongoose.Schema.Types.ObjectId,ref:'Diet_group_item'}
    }]
})

module.exports = mongoose. model('Diet_group',Diet_group_schema);