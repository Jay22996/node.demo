var mongoose = require('mongoose');

var gym_schema = new mongoose.Schema({
    gym_name : {type : String},
    gym_number : {type : Number},
    time : {type : String},
    address:{type: mongoose.Schema.Types.ObjectId,ref:'gym_address'},
    total_rating : {type:Number,default:1},
    averageRating:{type : Number,default:1.1},
    gym_trainers : [{
        trainers:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    gym_receptionist : [{
        receptionist:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    user_list : [{
        user_data:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    rating:[{
        ratingid:{type: mongoose.Schema.Types.ObjectId,ref:'rating'},
        user_id:{type: mongoose.Schema.Types.ObjectId,ref:'User_register'}
    }],
    services:[{
        type:String
    }],
    photos:[{
        type:String
    }],
    email:{type:String},
    password:{type:String},
    latitude:{type:Number,default:1.1},
    longitude:{type:Number,default:1.1},
    token:{type:String},
    invoiceline1:{type:String},
    invoiceline2:{type:String},
    invoiceline3:{type:String},
    profile_photo:{type:String},
    mobile_num:{type:String},
    about_gym_p1:{type:String,default:"Where Passion Fuels Transformation. Experience top-tier facilities, expert guidance, and a supportive community dedicated to achieving your health and wellness goals."},
    about_gym_photo1:{type:String,default:"https://res.cloudinary.com/dbm8modkd/image/upload/v1715748571/website/zayljtgjjmmfbpr7ht37.png"},
    about_gym_photo2:{type:String,default:"https://res.cloudinary.com/dbm8modkd/image/upload/v1715672093/website/ioq4w7rvqkchlqivyexd.png"},
    about_gym_tag1:{type:String,default:"Empowering Fitness, Transforming Lives"},
    about_gym_p2:{type:String,default:"At Iron Fitness, we're dedicated to fostering a community where fitness is not just a routine, but a way of life. Our mission is to empower individuals of all fitness levels to reach their goals and unlock their full potential. Whether you're a seasoned athlete or just starting your fitness journey, we provide the support and resources you need to succeed."},
    about_gym_p3:{type:String,default:"Equipped with state-of-the-art amenities and a diverse range of workout options, Iron Fitness offers an unparalleled fitness experience. From cutting-edge equipment to expert-led classes, we strive to create an environment that inspires and motivates our members to push their limits and achieve greatness    "},
    about_gym_tag2:{type:String,default:"Explore Our Services"},
    about_gym_p4:{type:String,default:"Unlock Your Potential with Our Comprehensive Fitness Services. From Personal Training to Group Classes, We're Here to Support Your Journey."},
    about_gym_trainer_tag:{type:String,default:"Introducing Our Fitness Gurus"},
    about_gym_trainer_p:{type:String,default:"Where Moments Become Milestones. Witness the Journey of Sweat, Determination, and Triumph"},
    about_gym_photo_teg:{type:String,default:"Our Gym's Fitness Saga"},
    about_gym_photo_p:{type:String,default:"Where Moments Become Milestones. Witness the Journey of Sweat, Determination, and Triumph"},
    about_gym_review_p:{type:String,default:"Read Reviews, Share Experiences, And Join The Conversation In Our Gym Community."},

})

module.exports = mongoose. model('gym_detail',gym_schema);