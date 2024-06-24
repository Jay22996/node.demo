var mongoose = require("mongoose");

var website_schema = new mongoose.Schema({
  home_teg1: { type: String },
  home_teg2: { type: String },
  home_teg3: { type: String },
  home_teg4: { type: String },
  home_photo: { type: String },
  home_button: { type: String },
  find_gym_teg1: { type: String },
  find_gym_teg2: { type: String },
  find_gym_button: { type: String },
  about_gym_teg_1: { type: String },
  about_gym_p_1: { type: String },
  about_gym_p_2: { type: String },
  about_gym_p_3: { type: String },
  about_gym_photo: { type: String },
  about_gym_button: { type: String },
  vibrant_Photos: 
    [
      {
        type: String,
      },
    ],
  vibrant_teg1: { type: String },
  vibrant_teg2: { type: String },
  vibrant_button: { type: String },
  vibrant_show: { type: String,default:"yes" },
  kasrat_review_teg1:{type: String },
  kasrat_gym_join_teg1:{type: String },
  kasrat_gym_join_teg2:{type: String },
  kasrat_gym_join_button:{type: String },
  footer_photo:{type: String },
  footer_teg1:{type: String },
  footer_teg2:{type: String },
  footer_com:{type: String },
  footer_email:{type: String },
  footer_address:{type: String },
  footer_location:{type: String },
  footer_copy:{type: String },
  gym_reg_tag1:{type: String },
  gym_reg_tag2:{type: String },
  gym_reg_tag3:{type: String },
  gym_reg_p1:{type: String },
  gym_reg_service:[{
    icon:{type: String },
    heading:{type: String },
    par:{type: String },
}],
gym_manage_service:[{
  type:String
}],
gym_manage_service_photo:{type: String},
kasrat_con_teg1:{type: String },
kasrat_con_teg2:{type: String },
kasrat_con_teg3:{type: String },
kasrat_con_teg4:{type: String },
kasrat_gym_reg1:{type: String},
kasrat_gym_reg2:{type: String},
gym_inquiry1:{type: String},
gym_inquiry2:{type: String},

});

module.exports = mongoose.model("website_detail", website_schema);
