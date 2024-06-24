var mongoose = require('mongoose');

var Post_schema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'User_register'},
    caption : {type : String},
    Type : {type : String},
    url:{type : String},
    like : [{
        likes:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    fire:[{
        fires:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    date:{ type: Date },
    let:{ type: String },
    long:{ type: String },
    thume_nail:{type: String}

})

module.exports = mongoose. model('Post_detail',Post_schema);