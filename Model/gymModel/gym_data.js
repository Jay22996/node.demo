var mongoose = require("mongoose");

var gym_data = new mongoose.Schema({
  post: [
    {
      posts: { type: mongoose.Schema.Types.ObjectId, ref: "Post_detail" },
    },
  ],
  followers: [
    {
      user_id: {
        type: [mongoose.Schema.Types.ObjectId, String],
        ref: "User_register",
        default: null,
      },
      gym_id: {
        type: [mongoose.Schema.Types.ObjectId, String],
        ref: "gym_detail",
        default: null,
      },
    },
  ],
  following: [
    {
      user_id: {
        type: [mongoose.Schema.Types.ObjectId, String],
        ref: "User_register",
        default: null,
      },
      gym_id: {
        type: [mongoose.Schema.Types.ObjectId, String],
        ref: "gym_detail",
        default: null,
      },
    },
  ],
});

module.exports = mongoose.model("gym_data", gym_data);
