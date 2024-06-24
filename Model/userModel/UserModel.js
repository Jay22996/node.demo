var mongoose = require('mongoose');

var User_schema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    password : {type : String},
    profile_photo :{type : String},
    bio : {type : String ,default:""},
    link: {type : String,default:""},
    mobile_number:{type : String},
    gender:{type :String},
    role : {type : String},
    dob : {type : Date}, 
    end_date : {type : Date},
    due_date:{type: Date},
    panding_payment: {type:Number},
    gym_id : {    type: [mongoose.Schema.Types.ObjectId, String],
        ref: 'gym_detail',
        default: null},
    reason:{type : String,default:""},
    leval:{type:String,default:""},
    user_data:{type: mongoose.Schema.Types.ObjectId,ref:'user_data'},
    workout:{type: String,default:"no"},
    diet:{type: String,default:"no"},
    inquiry:{type: String,default:"no"},
    profile_access:{type: String,default:"yes"},
    token:{type:String},
    latitude:{type:Number,default:0.0},
    longitude:{type:Number,default:0.0},
    e_number:{type : String},
    e_address:{type : String},
    last_active_date:{type : Date},
    last_seen:{type : Date},
    ref:[{
        gym_id:{type: mongoose.Schema.Types.ObjectId,ref:'gym_detail'}
    }]

})


module.exports = mongoose. model('User_register',User_schema);