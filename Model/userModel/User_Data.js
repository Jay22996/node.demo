var mongoose = require("mongoose")

var User_data_schema = new mongoose.Schema({
    post : [{
        posts:{type: mongoose.Schema.Types.ObjectId,ref:'Post_detail'}
    }],
    followers: [{
        followerss:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    following : [{
        followingg:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }]

})
module.exports = mongoose. model('user_data',User_data_schema)