var mongoose = require("mongoose");

var attan_schema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User_register"},

  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: "gym_detail" },

  date: { type: Date },
});

module.exports = mongoose.model("attendence_detail", attan_schema);
