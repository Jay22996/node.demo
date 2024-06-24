var mongoose = require('mongoose');

var announcement_schema = new mongoose.Schema({
    gym_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    message:[{
        messages : {type : String},
        date:{type: Date, default: Date.now}
    }],
    
})

module.exports = mongoose. model('announcement',announcement_schema);