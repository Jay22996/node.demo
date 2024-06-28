var mongoose = require("mongoose");

var Post_schema = new mongoose.Schema({
  caption: { type: String },
  Type: { type: String },
  url: { type: String },
  like: [
    {
      likes: { type: mongoose.Schema.Types.ObjectId, ref: "User_register" },
    },
  ],
  fire: [
    {
      fires: { type: mongoose.Schema.Types.ObjectId, ref: "gym_detail" },
    },
  ],
  date: { type: Date },
  let: { type: String },
  long: { type: String },
  thume_nail: { type: String },
  gym_id: {
    type: [mongoose.Schema.Types.ObjectId, String],
    ref: "gym_detail",
    default: null,
  },
  trainer_id: {
    type: [mongoose.Schema.Types.ObjectId, String],
    ref: "User_register",
    default: null,
  },
  user_id: {
    type: [mongoose.Schema.Types.ObjectId, String],
    ref: "User_register",
    default: null,
  },
  post_by:{type : String}
});

module.exports = mongoose.model("Post_detail", Post_schema);
