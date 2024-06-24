var mongoose = require("mongoose");

var Collection_schema = new mongoose.Schema({
  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: "gym_detail" },
  Collection: [
    {
      paymant: { type: Number },
      user_id: {
        type: [mongoose.Schema.Types.ObjectId, String],
        ref: "User_register",
        default: null,
      },
      date: { type: Date, default: new Date() },
      reason: { type: String },
    accept_by:{type: String},
    },
  ],
  Payout: [
    {
      paymant: { type: Number },
      date: { type: Date, default: new Date() },
      reason: { type: String },
    },
  ],
});

module.exports = mongoose.model("Collection", Collection_schema);
